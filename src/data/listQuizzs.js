import quizz_abeille from './quizzs/quizz_abeille';
import quizz_celebrites from './quizzs/quizz_celebrites';
import quizz_musee_du_louvre from './quizzs/quizz_musee_du_louvre';

let quizzs = [
        {
            "title": "Abeilles du rucher",
            "image": "https://www.ruchersdugue.fr/media/ruchersdugue/r/u/1200x800/ruche-abeille-butineuse.jpg",
            "quizz": quizz_abeille,
            "id": 1
        },
        {
            "title": "Célébrités",
            "image": "https://www.vegan-france.fr/wp-content/uploads/2021/06/arianna-grande-vegan.jpg",
            "quizz": quizz_celebrites,
            "id": 2
        },
        {
            "title": "Musée du Louvre",
            "image": "https://www.marianne-international.fr/wp-content/uploads/2020/12/le-louvre.jpg",
            "quizz": quizz_musee_du_louvre,
            "id": 3
        }
    ]

export default quizzs;