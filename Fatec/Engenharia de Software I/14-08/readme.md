# Software Engineering at Google, Oreilly.

## 1. Comentário sobre o trecho abaixo
<i> "What precisely do we mean by software engineering? What distinguishes “software engineering” from “programming” or “computer science”? And why would Google have a unique perspective to add to the corpus of previous software engineering literature written over the past 50 years? The terms “programming” and “software engineering” have been used interchangeably for quite some time in our industry, although each term has a different emphasis and different implications. University students tend to study computer science and get jobs writing code as “programmers.” “Software engineering,” however, sounds more serious, as if it implies the application of some theoretical knowledge to build something real and precise. Mechanical engineers, civil engineers, aeronautical engineers, and those in other engineering disciplines all practice engineering. They all work in the real world and use the application of their theoretical knowledge to create something real. Software engineers also create “something real,” though it is less tangible than the things other engineers create. Unlike those more established engineering professions, current software engineering theory or practice is not nearly as rigorous. Aeronautical engineers must follow rigid guidelines and practices, because errors in their calculations can cause real damage; programming, on the whole, has traditionally not followed such rigorous practices. But, as software becomes more integrated into our lives, we must adopt and rely on more rigorous engineering methods. We hope this book helps others see a path toward more reliable software practices." </i>

* O primeiro trecho da obra Software Engineering at Google traz uma ideia muito interessante e importante: A diferença entre os termos "Programadores" e "Engenheiros de Software". Muitas pessoas realmente desconhece a diferença entre os termos, visto que esses substantivos estão cotidianamente conectados. <strong>Todo engenheiro de software é um programador, porém nem todo programador é um engenheiro de software</strong>. O texto ainda ressalta que a confusão entre os termos ocorre por conta da engenharia de software criar algo não palpável, algo virtual, e também ter uma prática menos rígida. Embora haja uma diferença, o motivo do livro seria evidenciar elementos fundamentais utilizados pelos engenheiros.

---

## 2. Comentário sobre o trecho abaixo
<i>"Programming Over Time
 
We propose that “software engineering” encompasses not just the act of writing code, but all of the tools and processes an organization uses to build and maintain that code over time. What practices can a software organization introduce that will best keep its code valuable over the long term? How can engineers make a codebase more sustainable and the software engineering discipline itself more rigorous? We don’t have fundamental answers to these questions, but we hope that Google’s collective experience over the past two decades illuminates possible paths toward finding those answers. One key insight we share in this book is that software engineering can be thought of as “programming integrated over time.” What practices can we introduce to our code to make it sustainable—able to react to necessary change—over its life cycle, from conception to introduction to maintenance to deprecation?
 
The book emphasizes three fundamental principles that we feel software organizations should keep in mind when designing, architecting, and writing their code:
 
Time and Change
 
How code will need to adapt over the length of its life
 
Scale and Growth
 
How an organization will need to adapt as it evolves
 
Trade-offs and Costs
 
How an organization makes decisions, based on the lessons of Time and Change and Scale and Growth"
</i>

* A organização é a principal prática que deve ser aderida pelos profissionais, pois é ela que possibilita a todas as outras mudanças citadas. <strong>Sem organização fica complicado realizar uma manutenção, se torna difícil crescer o projeto e, o mais importante, torna o trabalho em equipe inviável</strong>. Um profissional mantém tudo documentado e organizado para que mudanças assim não causem muitos problemas. Engenharia de Software não se limita a programar, mas sim manter organizado e em concordância com as normas aplicadas. Portanto, é crucial conhecer essas regras.

---

## 3.

### Segurança x Usabilidade

* Sistemas muito seguros (ex.: autenticação em várias etapas) podem ser menos amigáveis para o usuário.
* Quanto mais fácil de usar, maior a chance de abrir brechas de segurança

### Custo x Qualidade

* Alta disponibilidade (99,999%) exige múltiplos servidores, redundância e monitoração, o que aumenta custos.
* Reduzir custos implica aceitar menos redundância e mais risco de downtime.

### Desempenho x Escalabilidade

* Melhorar a velocidade em um servidor único pode dificultar distribuir a carga em muitos servidores.


