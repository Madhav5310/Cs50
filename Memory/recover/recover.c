#include <cs50.h>
#include <stdbool.h>
#include <stdio.h>

#define BUFFER_SIZE 512

int main(int argc, char *argv[])
{
    if (argc != 2)
    {
        printf("Usage: ./recover IMAGE\n");
        return 1;
    }

    FILE *input = fopen(argv[1], "r");

    if (input == NULL)
    {
        printf("Could not open file.\n");
        return 1;
    }

    unsigned char buffer[BUFFER_SIZE];
    FILE *picture = NULL;
    bool jpg_found = false;
    int filecount = 0;

    while (fread(buffer, BUFFER_SIZE, 1, input) == 1)
    {
        if (buffer[0] == 0xff &&
            buffer[1] == 0xd8 &&
            buffer[2] == 0xff &&
            (buffer[3] & 0xf0) == 0xe0)
        {
            if (picture != NULL)
            {
                fclose(picture);
            }

            char filename[8];
            sprintf(filename, "%03i.jpg", filecount);

            picture = fopen(filename, "w");

            if (picture == NULL)
            {
                fclose(input);
                return 1;
            }

            filecount++;
            jpg_found = true;
        }

        if (jpg_found)
        {
            fwrite(buffer, BUFFER_SIZE, 1, picture);
        }
    }

    if (picture != NULL)
    {
        fclose(picture);
    }

    fclose(input);
    return 0;
}
