#include <stdio.h>
#include <cs50.h>
#include <string.h>
#include <stdlib.h>
#include <ctype.h>

int main(int argc, string argv[])
{
    if (argc != 2)
    {
        printf("Usage: ./caesar key\n");
        return 1;
    }

    for (int i = 0, n = strlen(argv[1]); i < n; i++)
    {
        if (!isdigit(argv[1][i]))
        {
            printf("Usage: ./caesar key\n");
            return 1;
        }
    }

    int k = atoi(argv[1]);

    string text = get_string("plaintext: ");

    printf("ciphertext: ");

    for (int i = 0, n = strlen(text); i < n; i++)
    {
        if (isupper(text[i]))
        {
            printf("%c", ((text[i] - 'A' + k) % 26) + 'A');
        }
        else if (islower(text[i]))
        {
            printf("%c", ((text[i] - 'a' + k) % 26) + 'a');
        }
        else
        {
            printf("%c", text[i]);
        }
    }

    printf("\n");
    return 0;
}
