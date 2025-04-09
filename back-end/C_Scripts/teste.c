#include <stdio.h>
#include <stdlib.h>
#include "cjson/cJSON.h"

int main() {
    // Criando objeto JSON
    cJSON *root = cJSON_CreateObject();

    // Adicionando campos
    cJSON_AddStringToObject(root, "nome", "João");
    cJSON_AddNumberToObject(root, "idade", 25);
    cJSON_AddBoolToObject(root, "estudante", 1);

    // Convertendo para string
    char *json_string = cJSON_Print(root);

    // Exibindo
    printf("%s\n", json_string);

    // Limpando memória
    cJSON_Delete(root);
    free(json_string);

    return 0;
}
