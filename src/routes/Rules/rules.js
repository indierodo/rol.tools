const rules = [
    {
        type: 'new_mechanic',
        title: 'Habilidad: Sigilo',
        description: 'La acción de ocultarse, ahora requiere de tirar un D20, el resultado se convierte en la CD para que alguien pueda encontrarte.'
    },
    {
        type: 'new_mechanic',
        title: 'Acciones: Sacar/Guardar arma',
        description: 'Sacar tu arma ya no consume tu acción, de modo que puedes sacar/guardar tu arma y atacar el mismo turno.'
    },
    {
        type: 'new_mechanic',
        title: 'Mecánicas: Inspiración Heroica',
        description: 'Ahora se maneja la "inspiración heroica", la cual te permitirá hacer un re-roll de cualquier tipo de dado que desees, esta inspiración no es acumulable, pero si adquieres un segundo punto, puedes transferirlo a alguien que no tenga.'
    },
    {
        type: 'new_mechanic',
        title: 'Acciones: Influir',
        description: 'Realiza una prueba de Carisma o Sabiduría para alterar la actitud de una criatura. Es decir, negociar ahora consume tu acción'
    },
    {
        type: 'new_mechanic',
        title: 'Acciones: Estudiar',
        description: 'Realizas una prueba de inteligencia para estudiar tu memoria, un libro, una pista u otra fuente de conocimiento y recordar una pieza importante de información sobre ello.'
    },
    {
        type: 'new_mechanic',
        title: 'Mecánicas: Moverse',
        description: 'Moverse entre criaturas ya no produce la condición de terreno difícil, esto significa que, tus aliados ya no te estorbarán en combate al moverte, pero aún puedes dañarlos con ataques en área. Así que, ¡ten cuidado!'
    },
    {
        type: 'new_mechanic',
        title: 'Mecánicas: Armas Pesadas',
        description: 'Las estatura ya no representa una limitante para usar "armas pesadas". Bienvenidos sean esos medianos y enanos con enormes martillos aplastacráneos.'
    },
    {
        type: 'new_mechanic',
        title: 'Mecánicas: Rituales',
        description: 'Ahora todas las razas son capaces de realizar conjuros de manera ritual. A familiarizarse con esa forma de emplearlos.'
    },
    {
        type: 'old_mechanic',
        title: 'Mecánicas: Hit Points',
        description: 'No hay hp negativos, por lo que, al momento de que una criatura recibe un ataque que reduce sus hp a 0 (o menos), simplemente quedan en 0'
    },
    {
        type: 'old_mechanic',
        title: 'Mecánicas: Muerte Instantánea',
        description: 'Si el daño excedente después de 0 iguala o supera a la cantidad de hp totales de la criatura, esta muere inmediatamente.'
    },
    {
        type: 'old_mechanic',
        title: 'Mecánicas: Daño de ejecución',
        description: 'Si la criatura con 0 hp recibe daño nuevamente, este es llamado "daño de ejecución" y la criatura morirá.'
    },
    {
        type: 'old_mechanic',
        title: 'Mecánicas: Estabilizar Criatura 1',
        description: ' Si la criatura recibe atención médica o recibe algún efecto mágico como "piedad con los moribundos", esta se estabilizará con 1 hp, lo mismo sucede si gana sus tiradas de salvación de muerte.'
    },
    {
        type: 'new_mechanic',
        title: 'Mecánicas: Estabilizar Criatura 2',
        description: 'Estabilizar a una criatura ahora la deja con 1 hp y con el estado "inconsciente", esto elimina el anterior estado de "estable".'
    },
    {
        type: 'coexistence_rules',
        title: '¿Romance/Shipeos?',
        description: 'El romance en la mesa no será el tema principal, sin embargo, estará permitido si este es de común acuerdo entre todos los jugadores implicados.'
    },
    {
        type: 'coexistence_rules',
        title: 'Límites: Violencia Sexual',
        description: 'Se omitirán por completo las descripçiones de agresiones sexuales en la mesa.'
    },
    {
        type: 'coexistence_rules',
        title: 'Límites: Torturas',
        description: 'Sabemos que un mundo medieval puede ser muy duro y quizá hayan muchos actos de violencia que debamos narrar, pero evitemos ser muy gráficos en nuestras descripciones. Esto no es una película gore.'
    },
    {
        type: 'coexistence_rules',
        title: 'Confianza',
        description: 'Si sientes que alguna de estas reglas se vulnera o te sientes incómodo en cualquier momento; antes, durante o después de la partida, siéntete libre de expresarlo, puede ser de manera directa o en privada con el DM. Lo más importante es que te sientas en confianza.'
    },
    {
        type: 'coexistence_rules',
        title: 'Rol es Rol',
        description: 'Por favor evita llevar problemas del mundo real a la mesa de juego, si hay un problema con alguien, háblenlo o comuniquenlo con su DM, no incluyan situaciones incómodas con otro jugador por un problema del mundo real'
    },
    {
        type: 'coexistence_rules',
        title: 'La regla más importante',
        description: '¡Diviértete!'
    },
    {
        type: 'homebrew_rules',
        title: 'Inciativa',
        description: 'Los empates de iniciativa se resolverán tirando dados de nuevo hasta que se resuelva el conflicto.'
    },
    {
        type: 'homebrew_rules',
        title: 'Inspiración',
        description: 'Conservaremos una segunda forma de inspiración acumulable que podrás gastar de acuerdo con la tabla. Esta inspiración te la dará tu DM de acuerdo a tus capacidades interpretativas. Así que, ¡lúcete!'
    },
]

export default rules