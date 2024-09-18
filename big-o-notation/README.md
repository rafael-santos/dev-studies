# Big O Notation

<p align="center">
  <table><thead>
    <tr>
      <th>Complexity chart representation</th>
      <th>Notation</th>
      <th>Name</th>
    </tr></thead>
  <tbody>
    <tr>
      <td rowspan="7">
        <img src="https://github.com/user-attachments/assets/dd1acbc8-3ef7-49e0-bd74-4db958ccc57d" alt="Big-O complexity chart from bigocheatsheet.com" width="400" height="250">
        <p align="center">
          <sub>Image from https://www.bigocheatsheet.com/</sub>
        </p>
        </td>
      <td>O(1)</td>
      <td><a href="/big-o-notation#o1---constant-complexity">Constant complexity</a></td>
    </tr>
    <tr>
      <td>O(log n)</td>
      <td><a href="/big-o-notation#olog-n---logarithmic-complexity">Logarithmic complexity</a></td>
    </tr>
    <tr>
      <td>O(n)</td>
      <td><a href="/big-o-notation#on---linear-complexity">Linear complexity</a></td>
    </tr>
    <tr>
      <td>O(n log n)</td>
      <td><a href="/big-o-notation#on-log-n---log-linear-complexity">Log Linear complexity</a></td>
    </tr>
    <tr>
      <td>O(n<sup>2</sup>)</td>
      <td><a href="/big-o-notation#on2---quadratic-complexity">Quadratic complexity</a></td>
    </tr>
    <tr>
      <td>O(2<sup>n</sup>)</td>
      <td><a href="/big-o-notation#o2n---exponential-complexity">Exponential complexity</a></td>
    </tr>
    <tr>
      <td>O(n!)</td>
      <td><a href="big-o-notation#on---factorial-complexity">Factorial complexity</a></td>
    </tr>
  </tbody>
  </table>
</p>

### What it is?

The Big O notation is a commonly used way to determine the complexity of an algorithm and predict how it's execution time or memoy consumption scales as it's input size grows. It is alwso know as Space Complexity, Time Complexity or Algorith Efficiency.

We may think mesuring time and space complexity in real units like minutes, seconds, inches, meters; but the Big O notation uses an abstract way to describe this mesures.

Abstract because it's not about mesuring the real time/cost, but an abstraction of it that allow us to focus on the algorith performance, disregarding execution conditions, hardware capabilities, network, etc. which could influence real time/cost mesurement.

The same algorithm could run in "real time measurement" faster or slower on different computers, but the growth rate of execution time is equivalent in both of them, because it's a factor of the algorithm itself, not of the conditions it was executed on.

For this reason, the Big O notation cares about the Order of Magnitude of how many steps are executed -- or how much memory is alocated -- by the algorithm as it's input grows. This way it becomes independete of the machine or hardware differences, in fact, we don't need to execute the code at all to get it's complexity mesurement. The same could not be achieved if we wanted a real measurement.

<p align="center">
  <img src="https://github.com/user-attachments/assets/430dde04-d289-4bfb-aa61-6359b8aa078e"/>
</p>

### Why it's important?

The big O notation helps you understant how your system or program will behave as it scales.

Not only time, memory and computational power cost money when you need to scale your application, but it also
affect your system uptime, reliability and performance under heavy load stress.

It's important to understand it so you can save money and predict if you solution will scale as your problem grows, or fall apart and you don't know why.

#### A naive example:

Let's say you have an hypothetical system that handles 1,000 users and have 16gb RAM. Under heavy load, it uses about 8gb RAM, so there is space to almost double your users, right?

Some day you reach 1,500 users, and even under normal load circumstances, your application suffers down times and slowness. You then decide to end it for good, going from a 16gb RAM to an 32gb RAM plan.

It works. It costs more money, but you are happy because everything works and you have already prepeared to grown even more in the future, after all, you have "4 times more" RAM than you need to support a thousan users under heavy load.

Time passes and everyting is great, you have 2,000 users now! But things start being unreliable again... What's wrong? You have doubled your RAM, there are only 500 more users, and yet you are hitting memory capacity again.

Well, the thing missing here is taking in consideration your system complexity. In this example, I used an quadradic complexity to show the imortance of understanding how your solution scales.

More important than that, is to know how to fix this problem with a better solution, like addressing the complexity issue, insted of paying higher an higher prices to support more users.

The table bellow illustrates the difference in aproaching the problem by solving the complexity issue vs. just scaling RAM.

| Number<br>of users | RAM needed with<br>complexity N<sup>2</sup> | vs | RAM needed with<br>complexity N*logN |
|:------------------:|:---------------------------------:|:--:|:------------------------------------:|
|                500 |                2gb                |    |                 36mb                 |
|              1,000 |                8gb                |    |                 80mb                 |
|              1,500 |                16gb               |    |                 126mb                |
|              2,000 |                32gb               |    |                 175mb                |

<details>
  <summary>See table calculations</summary>

  - The base information:
    - We need 8gb of RAM to handle 1,000 users.
    - Our system runs with N<sup>2</sup> complexity
    - Our N is the number of users
    - N<sup>2</sup> = 1000<sup>2</sup> = 1,000,000 = 8gb

  - Scaling RAM with N<sup>2</sup> complexity
    - We know 1,000,000 represents 8gb RAM
    - So we can say 1,000,000/8 = 125,000 = 1gb
    - Then we can calculate the N<sup>2</sup> for any number of users
      - 500<sup>2</sup> = 250,000 = 2gb
      - 1,500<sup>2</sup> = 2,250,000 = 18gb
      - 2,000<sup>2</sup> = 4,000,000 = 32gb

  - Scaling RAM with N*logN complexity
    - Calculating N*logN for any number of users
      - 500 * log<sub>2</sub> (500) = 4,482
      - 1000 * log<sub>2</sub> (1000) = 9,965
      - 1500 * log<sub>2</sub> (1500) = 15,826
      - 2000 * log<sub>2</sub> (2000) = 21,931
    - Calculating RAM for N*logN
      - If 125,000 = 1gb then 125,000 / 1,000 = 125 = 1mb
      - 4,482 / 125 = 36mb
      - 9,965 / 125 = 80mb
      - 15,826 / 125 = 126mb
      - 21,931 / 125 = 175mb

</details>

As we can see, by knowing we have a quadradic complexity O(n<sup>2</sup>), it's easy to predict that scaling RAM in our problem is not a permanent solution. On the other hand, reducing the system complexity to O(n*log n) would have a HUGE impact on scaling our system.

With the same 8gb RAM we needed for 1k users, we could support over 100k users and still have 8gb RAM free with no extra cost. To support the same amount of users just by scaling RAM, we would need 80,000 gb RAM! Can you pay for that?

## Warming Up

Now that we understand the importance of knowing the Big O notation, let's break it down so we can learn how to thinkin in its abstract way, evaluate an algorithm and identify its complexity.

### Basic concept

### How to analyse complexity

### 1. Focar nos loops do algoritmo
### 2. Verifique a complexidade das funções e métodos utilizados da linguagem
### 3. Foque no termo de maior grau, ignorando constantes e termos menores

## Big O Complexities

### O(1) - Constant complexity

### O(log n) - Logarithmic complexity

### O(n) - Linear complexity

### O(n log n) - Log Linear complexity

### O(n<sup>2</sup>) - Quadratic complexity

### O(2<sup>n</sup>) - Exponential complexity

### O(n!) - Factorial complexity


# References
- [Youtube: Rocketseat - Desmistificando Big-O Notation com Daniel Costa!](https://www.youtube.com/watch?v=ugDAPN3rhIE)
- [Youtube: desenvolvedor.io - Notação Big-O como classificar?](https://www.youtube.com/watch?v=KjJwx-AB4KI)
- [Youtube: Bro Code - Learn Big O notation in 6 minutes](https://www.youtube.com/watch?v=XMUe3zFhM5c)
- [Youtube: NeetCode - Big-O Notation - For Coding Interviews](https://www.youtube.com/watch?v=BgLTDT03QtU)
- [Github: EduardoPires/big-o-notation](https://github.com/EduardoPires/big-o-notation)
- [Site: Big-O Cheat Sheet](https://www.bigocheatsheet.com/)


<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
---
---

Usada para medir como o tempo de execução ou o espaço requerido (memória) de seu algoritmo cresce a medida que o tamanho da entrada cresce.

Nomes conhecidos: Space complexity, Time complexity, eficiência de algorítimos

Uma forma de medir de maneira abstrata como um programa se comporta em escala.

- Medição abstrata da ordem de crescimento de um algorítmo conforme a entrada aumenta
  - Tempo de execução
  - Espaço (geralmente memória)

Abstrato pois não é o tempo/custo literal, mas uma abstração que permite pensar apenas na performane do algorítimo, desconsiderando condições de execução, capacidade de hardware, rede, etc. que poderiam influenciar o tempo real.

O mesmo algorítimo pode rodar em tempo real mais rápido ou mais lento em computadores diferentes, mas a taxa de crescimento desse tempo de execução permanece equivalente. Essa taxa de crescimento pode ser representada em forma de gráfico.

Ordem de grandeza da quantidade de passos executados (ou memória alocada) pelo algorítmo de acordo com o tamanho da entrada. Dessa forma a notação se torna independete da máquina utilizada, pois não usaremos medidas em minutos/segundos ou megabytes.


[gráfico com todas as curvas possiveis]
[tabela comparando taxa de crescimento de execução de todas as curvas diferentes]

### Why it's important?

The big O notation helps you understant how your system or program will behave as it scales.

Time/memory and computational power cost money when you need to scale your application.

Custo / tempo de processamento x Entrada/Volume de elementos

500^2 = 250000 = 2gb
1000^2 = 1000000 = 8gb
1500^2 = 2250000 = 18gb
2000^2 = 4000000 = 32gb

80,000 gb RAM!

Math.log2(500)*500
4482.892142331044
0.035856
36mb

Math.log2(1000)*1000
9965.784284662088
0.07972
80mb

Math.log2(1500)*1500
15826.120178074865
0.126608
126mb

Math.log2(2000)*2000
21931.568569324176
0.175448
175mb

### Best way to solve a problem

Primeiro resolva o problema, faça funcionar. Abordagem "grid", ingênua.
Depois pense em como você pode melhorar a performance da solução.

## Basics



### Concept

Ordem de grandeza

Análise assintótica - Matemática assintótica.

x = n^2;
x = 990n^2;
x = n^2 + 54n + 13;

polinômio de maior grau
considera apenas as maiores ordens de grandeza
considera sempre o pior cenário, o que seria o mais custoso


Limite superior do tempo de execução de um algorítmo (pior caso)
Maior numero de operações executadas, maior tempo de execução


### How to analyse complexity

There are 3 major steps we can uso to define an algorithm complexity:

### Focar nos loops do algoritmo
### Verifique a complexidade das funções e métodos utilizados da linguagem
### Foque no termo de maior grau, ignorando constantes e termos menores



#### 1. Sum each step/instruction of the algorithm
2 + x + 2 + n(x) + 1
#### 2. Ignore every constant number
x = x + n(x)
x + n(x + n(x + n(x + n(...)))) + n(x + n(x + n(x + n(...))))
n(n(n(n(...)))) + n(n(n(n(...))))
2*n(n(n(n(...))))
#### 3. Ignore every multiplicative number
n(n(n(n(...))))
n^n

#### 4.

## Big O Complexities

### O(1) - Constant complexity

> The execution complexity is constant, no matter how the input grows

Some data structures allow you to achieve a constant complexity search.
If you are using a Dictionary, Map or Hashmap, that allow indexed values.

### O(log n) - Logarithmic complexity

By definition, if you have an ordered list, you can achieve logarithmic complexity using binary search.

Quando o tamanho dos dados de entrada for reduzido a cada iteração.
Nesse caso, o número de operações não é o mesmo dos dados de entrada. Na verdade, eles diminuem a cada iteração.
Dividir para conquistar.

### O(n) - Linear complexity

### O(n log n) - Log Linear complexity

### O(n^2) - Quadratic complexity

### O(2^n) - Exponential complexity
Recursive calls usually result in a exponetial
Programação dinâmica para melhorar
"Da seu melhor chute, e vamos testar"

### O(n!) - Factorial complexity
Permutations
Travelling Salesman Problem



https://neetcode.io/courses/dsa-for-beginners/0
