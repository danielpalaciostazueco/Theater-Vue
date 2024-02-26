import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createI18n } from 'vue-i18n'; 

const messages = {
  en: {
    Header: {
      infomation : 'Information',
      schedule : 'Schedule',
      activities: 'Activities',
      contact: 'Contact',
    },

    Footer: {
      information : 'Information',
      schedule : 'Schedule',
      activities: 'Activities',
      contact: 'Contact',
    },
    
    About: {
      information: 'Information',
      text: 'box office hours',
      text2:'We are pleased to announce that our opening hours for purchasing tickets are especially convenient for our visitors. From Monday to Friday, our ticket offices are open from 8:00 a.m. until 7:00 p.m., thus allowing both early risers and those who prefer afternoons can purchase their tickets without problems. On weekends, we exte Hours: We open at 9:00 a.m. and we close at 8:00 p.m., making sure that even those who enjoy a well-deserved rest in the morning can plan their visit. Furthermore, for greater convenience, our website offers the possibility of purchasing tickets online 24 hours a day. day, every day of the week, making it even easier to access our events and shows.',
    },

    Activities: {
      activities: 'Other Activities',
      text: 'Guided visits',
      text2: 'Discover the secrets behind the scenes with our exciting guided tours of the Al Theater UrbanTheater. Join us as we explore the hidden corners of this iconic cultural space. Our expert guides will take you behind the scenes, revealing the rich history of the theater and sharing fascinating anecdotes about the productions that have illuminated our scene over the years. From the dressing rooms to the main curtain, you will experience the magic of theater from a unique perspective. Immerse yourself in the history and charm that make our theater a truly special place!'
    },
    
    AdminPanel: {
      title: 'Theater Management',
      create : 'Create',
      id: 'ID',
      name : 'Name',
      description: 'Description',
      authors: 'Authors',
      duration: 'Duration',
      actors: 'Actors',
      images: 'Images',
      dates : 'Dates',
      poster : 'Poster',
      actions: 'Actions',
      save: 'Save',
      cancel: 'Cancel',
    },

    Comprar2: {
      information: 'Buy tickets',
      text: 'Total Price:',
      text2: 'Buy ',
    },

    Comprar1: {
      information: 'Buy tickets',
      text: 'Date and Time Information',
      text2: 'Buy ',
    },

    Contact: {
      information: 'Contact',
      text: 'Postal Code',
      text2: 'Email:',
      text3: 'Phone:',
      text4: 'Address:',
    },

    Function: {
      text1: 'Show times',
      text2: 'Function information',
      text3: 'Buy tickets',
      text4: 'Cast of actors'
    },

    HomeAdmin: {
      information : 'Information',
      schedule : 'Schedule',
      activities: 'Activities',
      contact: 'Contact',
      admin: 'Admin Panel',
      text1: 'Next Functions',
      text2: 'Romeo and Juliet',
      text3: 'Romeo and Juliet" is a play written by William Shakespeare in the 16th century. The plot follows two young lovers, Romeo and Juliet, whose rival families cause conflict. Although adversity, they fall in love and marry secretly, but a series of misunderstandings and tragedies lead to a fatal outcome. The work explores themes such as love, family rivalry and destiny, becoming one of the best-known love stories in literature.',
      text4: 'Buy tickets',
    },

    Programacion: {
      text1: 'Schedule',
      text2: 'Buy tickets',
    },

    LoginAdmin: {
      text1: 'Login',
      text2: 'If you do not hace an user account, please register',
      text3:'Here',
      text4: 'If you have an user account please login',
    },

    LoginUser: {
      text1: 'Login',
      text2: 'If you do not hace an user account, please register',
      text3:'Here',
      text4: 'If you have an admin account please login',
    },

    CreateAccount: {
      text1: 'Create Account',
      text2: 'If you already have an account please login',
      text3:'Here',
      text4: 'If you have an admin account please login',
      text5: 'Create',
    },


  },
    
  es: {
    Header:{
      information : 'Información',
      schedule : 'Programación',
      activities: 'Actividades',
      contact: 'Contacto',
    },

    Footer:{
      information : 'Información',
      schedule : 'Programación',
      activities: 'Actividades',
      contact: 'Contacto',
    },

    About:{
    information : 'Información',
    text: 'horario de taquillas',
    text2:'Nos complace anunciar que nuestro horario de apertura para la compra de entradas es especialmente conveniente para nuestros visitantes. De lunes a viernes, nuestras taquillas están abiertas desde las 8:00 a.m. hasta las 7:00 p.m., permitiendo así que tanto los madrugadores como aquellos que prefieren las tardes puedan adquirir sus entradas sin problemas. Los fines de semana, extendemos nuestro horario: abrimos a las 9:00 a.m. y cerramos a las 8:00 p.m., asegurándonos de que incluso aquellos que disfrutan de un merecido descanso por la mañana puedan planificar su visita. Además, para una mayor comodidad, nuestra página web ofrece la posibilidad de adquirir entradas en línea las 24 horas del día, todos los días de la semana, facilitando aún más el acceso a nuestros eventos y espectáculos.',
    },

    Activities:{
      activities: 'Otras Actividades',
      text: 'Visitas guiadas',
      text2: 'Descubre los secretos detrás de escena con nuestras emocionantes visitas guiadas al Teatro Urbano. Únete a nosotros mientras exploramos los rincones ocultos de este icónico espacio cultural. Nuestros expertos guías te llevarán detrás de escena, revelando la rica historia del teatro y compartiendo fascinantes anécdotas sobre las producciones que han iluminado nuestra escena a lo largo de los años. Desde los camerinos hasta el telón principal, experimentarás la magia del teatro desde una perspectiva única. ¡Sumérgete en la historia y el encanto que hacen de nuestro teatro un lugar verdaderamente especial!'
    },
   
    AdminPanel: {
      title: 'Gestión de Teatro',
      create : 'Crear',
      id: 'ID',
      name : 'Nombre',
      description: 'Descripción',
      authors: 'Autores',
      duration: 'Duración',
      actors: 'Actores',
      images: 'Imágenes',
      dates : 'Fechas',
      poster : 'Cartel',
      actions: 'Acciones',
      save: 'Guardar',
      cancel: 'Cancelar',
    },

    Comprar2: {
      information: 'Comprar entradas',
      text: 'Precio Total:',
      text2: 'Comprar ',
    },

    Comprar1: {
      information: 'Comprar entradas',
      text: 'Información de Fecha y Hora',
      text2: 'Comprar ',
    },

    Contact: {
      information: 'Contacto',
      text: 'Código Postal',
      text2: 'Correo Electrónico:',
      text3: 'Teléfono:',
      text4: 'Dirección:',
    },

    Function: {
      text1: 'Horarios de función',
      text2: 'Información de la función',
      text3: 'Comprar entradas',
      text4: 'Reparto de actores',
    },

    HomeAdmin: {
      information : 'Información',
      schedule : 'Prgoramación',
      activities: 'Actividades',
      contact: 'Contacto',
      admin: 'Panel de Administración',
      text1: 'Próximas Funciones',
      text2: 'Romeo y Julieta',
      text3: 'Romeo y Julieta" es una obra escrita por William Shakespeare en el siglo XVI. La trama sigue a dos jóvenes amantes, Romeo y Julieta, cuyas familias rivales causan conflictos. A pesar de la adversidad, se enamoran y se casan en secreto, pero una serie de malentendidos y tragedias conducen a un desenlace fatal. La obra explora temas como el amor, la rivalidad familiar y el destino, convirtiéndose en una de las historias de amor más conocidas de la literatura.',
      text4: 'Comprar entradas',
    },

    Programacion: {
      text1: 'Programación',
      text2: 'Comprar entradas',
    },

    LoginAdmin: {
      text1: 'Iniciar Sesión',
      text2: 'Si no tienes una cuenta de usuario, por favor registrate',
      text3:'Aquí',
      text4: 'Si tienes una cuenta de usuario por favor inicia sesión',
    },

    LoginUser: {
      text1: 'Iniciar Sesión',
      text2: 'Si no tienes una cuenta de usuario, por favor registrate',
      text3:'Aquí',
      text4: 'Si tienes una cuenta de administrador por favor inicia sesión',
    },

    CreateAccount: {
      text1: 'Crear Cuenta',
      text2: 'Si ya tienes una cuenta por favor inicia sesión',
      text3:'Aquí',
      text4: 'Si tienes una cuenta de administrador por favor inicia sesión',
      text5: 'Crear',
    },



  }};
  
const i18n = createI18n({
  locale: 'en', 
  fallbackLocale: 'es', 
  messages, 
});

const app = createApp(App);

app.use(router);
app.use(i18n); 
app.mount('#app');
