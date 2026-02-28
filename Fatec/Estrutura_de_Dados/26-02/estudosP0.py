# --- Definição das Funções ---

def ex1():
    lista = [4, 6, 2, 5, 12, 11, 14, 15, 20, 24, 25, 1632, 14231, 15162, 1, 132215, 0]
    return [x for x in lista if x % 2 == 0]

def ex2():
    return [x**2 for x in range(1, 21) if x % 2 == 0]

def ex3():
    lista = "davi kauan cleber caua ramon paralelepipedo cubomagico".split()
    return sorted(lista, key=len)

def ex4():
    lista = "davi kauan cleber caua ramon paralelepipedo cubomagico".split()
    return sorted(lista, key=lambda x: len([l for l in x if l in "aeiouAEIOU"]))

def ex5():
    lista = "davi kauan cleber caua ramon paralelepipedo cubomagico".split()
    return sorted(lista, key=lambda x: x[-1])

def ex6():
    frase = "Cala a boca, banana"
    return "".join([x.upper() if i % 2 == 0 else x.lower() for i, x in enumerate(frase)])

def ex7():
    lista = "af1231a opa120 l9k2 l3k g3br1el".split()
    return sorted(lista, key=lambda x: int("".join(filter(str.isdigit, x))))

def ex8():
    return {x: x**2 for x in range(1, 11)}

def ex9():
    frase = "São Paulo é o maior do mundo"
    return {x: frase.count(x) for x in frase}

def ex10():
    dicionario = {'a': 2, 'b': 5, 'c': 3}
    return {valor: chave for chave, valor in dicionario.items()}

def ex11():
    limite = 5
    dicionario = {1: 190, 2: -2, 3: 0, 4: 8}
    return {k: v for k, v in dicionario.items() if v > limite}

def ex12():
    dicionario = {1: 190, 2: -2, 3: 0, 4: 8}
    return dict(sorted(dicionario.items(), key=lambda x: x[1]))

def ex13():
    dicionario = {"Uva": "Roxa", "Jabuticaba": "Preta", "Pera": "Verde", "Melancia": "Vermelha", "Noz": "Marrom"}
    return dict(sorted(dicionario.items(), key=lambda x: len(x[0])))

def ex14():
    frase = "Cleber olhando para o horizonte no novo horizonte"
    return {palavra: frase.split().count(palavra) for palavra in frase.split()}

def ex15():
    dicionario = {1: 100, 2: 25, 3: 16, 4: 81}
    return {k: v**(1/2) for k, v in dicionario.items()}

def ex16():
    lista = 'cax abe b13 c23 arr d12'.split()
    return {x[0]: [y for y in lista if y[0] == x[0]] for x in sorted(lista)}

# --- Bloco de Execução de Teste ---

if __name__ == "__main__":
    exercicios = [
        ("1. Números Pares", ex1),
        ("2. Quadrados Pares (1-20)", ex2),
        ("3. Ordenar por Tamanho", ex3),
        ("4. Ordenar por Vogais", ex4),
        ("5. Ordenar por Último Caractere", ex5),
        ("6. Alternar Maiúsculas/Minúsculas", ex6),
        ("7. Ordenar por Números na String", ex7),
        ("8. Dict de Quadrados (1-10)", ex8),
        ("9. Contagem de Caracteres", ex9),
        ("10. Inverter Chaves e Valores", ex10),
        ("11. Filtrar Valores > 5", ex11),
        ("12. Ordenar Dict por Valores", ex12),
        ("13. Ordenar Dict por Comp. da Chave", ex13),
        ("14. Contagem de Palavras na Frase", ex14),
        ("15. Raiz Quadrada dos Valores", ex15),
        ("16. Agrupar por Primeira Letra", ex16)
    ]

    print("=== RESULTADOS DOS EXERCÍCIOS ===\n")
    for titulo, func in exercicios:
        try:
            resultado = func()
            print(f"{titulo}:\n   {resultado}\n")
        except Exception as e:
            print(f"Erro no {titulo}: {e}\n")