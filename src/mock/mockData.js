 
 export const products = [

    {
    id: 1,
    nombre: 'Piscina de Hidroterapia',
    imagen: 'https://i.ibb.co/mqXFsr3/foto1.jpg',
    precio: 10.555,
    descripcion:  'Brinda beneficios terapéuticos mediante chorros de masajes con agua caliente o fría.',
    stock: 10,
    category: 'spa',
    
    
    },
    {
    id: 2,
    nombre: 'Sauna',
    imagen: 'https://i.ibb.co/fF6ykDM/foto2.jpg',
    precio: 11.455,
    descripcion: 'Baño sauna (desintoxicante)',
    stock: 10,
    category: 'spa',
    
    
    },
    {
    id: 3,
    nombre: 'Masaje descontracturante',
    imagen: 'https://i.ibb.co/0yLYzCF/foto3.jpg',
    precio: 8.555,
    descripcion: 'Masaje descontracturante para relajar la musculatura y disolver las contracturas que se producen por el estrés, las malas posturas, la falta de descanso o sedentarismo.',
    stock: 10,
    category: 'masajes',
    
    },
    {
    id: 4,
    nombre: 'Masaje con piedras calientes',
    imagen: 'https://i.ibb.co/Gpvx6Nt/foto4.jpg',
    precio: 9.455,
    descripcion: 'Alivia la tensión muscular, mejora el flujo sanguíneo y alivia el dolor mediante el uso de piedras calientes.',
    stock: 10,
    category: 'masajes',
    
    },
    {
    id: 5,
    nombre: 'Masaje venoso profundo',
    imagen: 'https://i.ibb.co/GpWPQjr/foto5.jpg',
    precio: 8.555,
    descripcion: 'Masaje para piernas cansadas.',
    stock: 10,
    category: 'masajes',
    
    },
    {
    id: 6,
    nombre: 'Masajes y tratamientos faciales',
    imagen: 'https://i.ibb.co/k92XM5q/foto6.jpg',
    precio: 12.455,
    descripcion: 'Masajes, exfoliación, nutrición y máscaras.',
    stock: 10,
    category: 'cuidado',
    
    },
    {
    id: 7,
    nombre: 'Tratamientos corporales',
    imagen: 'https://i.ibb.co/61jR0nY/foto7.jpg',
    precio: 10.355,
    descripcion: 'Exfoliación y nutrición.',
    stock: 10,
    category: 'cuidado',
    
    
    },
    {
    id: 8,
    nombre: 'Manicura y pedicura',
    imagen: 'https://i.ibb.co/ZBWbvzs/foto8.jpg',
    precio: 8.555,
    descripcion: 'Tratamientos cosméticos de belleza de uñas de manos y pies',
    stock: 10,
    category: 'cuidado',
   
    },
    ];


    export const getProducts = () => {
return new Promise ((resolve) => {
setTimeout(() => {
resolve(products)
}, 500)
})
}


