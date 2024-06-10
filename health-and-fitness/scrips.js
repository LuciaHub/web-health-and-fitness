document.addEventListener('DOMContentLoaded', () => {
    // Datos de artículos
    const articles = [
        {
            id: 'fat-loss',
            title: 'Pérdida de grasa',
            summary: 'Detalles y consejos sobre la pérdida de grasa.',
            url: 'fat-loss.html',
            imageUrl: 'assets/image/fat-loss-icon.jpg'
        },
        {
            id: 'muscle-gain',
            title: 'Cómo ganar masa muscular',
            summary: 'Detalles y consejos sobre cómo ganar masa muscular.',
            url: 'muscle-gain.html',
            imageUrl: 'assets/image/muscle-gain-icon.jpg'
        },
        {
            id: 'sleep',
            title: 'Sueño y descanso',
            summary: 'Importancia del sueño y el descanso en el fitness.',
            url: 'sleep.html',
            imageUrl: 'assets/image/sleep-icon.jpg'
        },
        {
            id: 'supplements',
            title: 'Guía de suplementos',
            summary: 'Información sobre suplementos para mejorar el rendimiento y la salud.',
            url: 'suplements.html',
            imageUrl: 'assets/image/suplements-icon.jpg'
        }
    ];

    // Cargar y mostrar artículos
    const articlesContainer = document.getElementById('articles-container'); /*obtiene una referencia al elemento HTML que tiene el ID "articles-container" y la guarda en la variable articlesContainer. Este elemento es el contenedor donde quieres agregar tus artículos. */
    articles.forEach(article => { /*comienza el bucle forEach que recorre cada elemento en el array articles.*/
    const articleSection = document.createElement('a'); /*Se crea un nuevo elemento*/
    articleSection.className = 'article-circle';
    articleSection.id = article.id;
    articleSection.href = article.url;
    /*Se le asigna la clase "article-circle"
    Se le asigna un ID basado en el ID del artículo en el array articles.
    Se le asigna un atributo href con la URL del artículo.*/

    const imageContainer = document.createElement('div');
    imageContainer.className = 'image-container';

    const image = document.createElement('img');
    image.src = article.imageUrl; 
    image.alt = article.title;

    /*Se le establecen dos propiedades a 'img'
    'src' es la url de la imagen del articulo
    'alt' es el titulo del articulo*/

    const title = document.createElement('h3');
    title.textContent = article.title;

    imageContainer.appendChild(image);
    articleSection.appendChild(imageContainer);
    articleSection.appendChild(title);
    articlesContainer.appendChild(articleSection);

    /*Se añaden los elementos img y h3 creados al elemento a (ancla) articleSection, colocando así la imagen seguida del título dentro de cada artículo
    
    */
});

});

