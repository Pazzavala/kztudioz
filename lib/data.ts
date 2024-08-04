import React from 'react';

// Clown Collection
import blackClown from '@/public/assets/images/clowns/black_clown.png';
import blueClown from '@/public/assets/images/clowns/blue_clown.png';
import pinkClown from '@/public/assets/images/clowns/pink_clown.png';
import redClown from '@/public/assets/images/clowns/red_clown.png';

// Dark Collection
import crossEye from '@/public/assets/images/dark/cross_eye.png';
import cupOfEyes from '@/public/assets/images/dark/cup_of_eyes.png';
import ojoPorOjo from '@/public/assets/images/dark/ojo_por_ojo.png';
import darkGirl1 from '@/public/assets/images/dark/dark_girl_1.png';
import darkGirl2 from '@/public/assets/images/dark/dark_girl_2.png';
import darkGirl3 from '@/public/assets/images/dark/dark_girl_3.png';
import darkGirl4 from '@/public/assets/images/dark/dark_girl_4.png';
import darkGirl5 from '@/public/assets/images/dark/dark_girl_5.png';
import darkGirl6 from '@/public/assets/images/dark/dark_girl_6.png';
import darkGirl7 from '@/public/assets/images/dark/dark_girl_7.png';
import darkGirl8 from '@/public/assets/images/dark/dark_girl_8.png';
import darkGirl9 from '@/public/assets/images/dark/dark_girl_9.png';

// Dichos Collection
import ahPerro from '@/public/assets/images/dichos/ah_perro.png';
import drinkUpBitch from '@/public/assets/images/dichos/drink_up_bitch.png';
import elGraduado from '@/public/assets/images/dichos/el_graduado.png';
import laGraduada from '@/public/assets/images/dichos/la_graduada.png';
import imProudOfYou from '@/public/assets/images/dichos/im_proud_of_you.png';
import karma from '@/public/assets/images/dichos/karma_is_a_blessing.png';
import keepItUp from '@/public/assets/images/dichos/keep_it_up.png';
import oilo from '@/public/assets/images/dichos/oilo.png';
import ringRingBitch from '@/public/assets/images/dichos/ring_ring_bitch.png';
import siSePudo from '@/public/assets/images/dichos/si_se_pudo.png';
import spillTheTea from '@/public/assets/images/dichos/spill_the_tea.png';
import teQuieroMuncho from '@/public/assets/images/dichos/te_quiero_muncho.png';
import traka from '@/public/assets/images/dichos/traka.png';
import medicina from '@/public/assets/images/dichos/tu_eres_la_medicina.png';

// Months Collection
import april from '@/public/assets/images/months/april.png';
import august from '@/public/assets/images/months/august.png';
import february from '@/public/assets/images/months/february.png';
import january from '@/public/assets/images/months/january.png';
import july from '@/public/assets/images/months/july.png';
import june from '@/public/assets/images/months/june.png';
import march from '@/public/assets/images/months/march.png';
import may from '@/public/assets/images/months/may.png';
import october from '@/public/assets/images/months/october.png';
import september from '@/public/assets/images/months/september.png';

export const navLinks = [
    {
        name: 'Home',
        hash: '#home',
    },
    {
        name: 'Shop',
        hash: '#shop',
    },
    {
        name: 'About',
        hash: '#about',
    },
    {
        name: 'Contact',
        hash: '#contact',
    }
] as const;

// Probably add some tags, add date they were relased
export const coverCollection = [
    
    {
        title: 'Dark Collection', 
        imageUrl: darkGirl1,
    },
    {
        title: 'Dichos Collection', 
        imageUrl: ringRingBitch,
    },
    {
        title: 'Months Collection', 
        imageUrl: january,
    },
    {
        title: 'Clown Collection', 
        imageUrl: blueClown,
    },
] as const;

export const clownCollection = [
    {
        title: 'Black Clown',
        description: '...',
        tags:['Clown', 'Black', 'Girl'],
        imageUrl: blackClown,
    },
    {
        title:'Blue Clown',
        description: '...',
        tags: ['Clown', 'Blue', 'Girl'],
        imageUrl: blueClown,
    },
    {
        title: 'Pink Clown',
        description: '...',
        tags:['Clown', 'Pink', 'Girl'],
        imageUrl: pinkClown,
    },
    {
        title: 'Red Clown',
        description: '...',
        tags:['Clown', 'Red', 'Girl'],
        imageUrl: redClown,
    },
] as const;

export const darkCollection = [
    {
        title: 'Cross Eye',
        description: '...',
        tags: ['Dark', 'Eye', 'Cross'],
        imageUrl: crossEye,
    },
    {
        title: 'Cup of Eyes',
        description: '...',
        tags: ['Dark', 'Eye'],
        imageUrl: cupOfEyes,
    },
    {
        title: 'Ojo Por Ojo',
        description: '...',
        tags: ['Dark', 'Eye'],
        imageUrl: ojoPorOjo,
    },
    {
        title: 'Dark Girl 1',
        description: '...',
        tags: ['Dark', 'Girl'],
        imageUrl: darkGirl1,
    },
    {
        title: 'Dark Girl 2',
        description: '...',
        tags: ['Dark', 'Girl'],
        imageUrl: darkGirl2,
    },
    {
        title: 'Dark Girl 3',
        description: '...',
        tags: ['Dark', 'Girl'],
        imageUrl: darkGirl3,
    },
    {
        title: 'Dark Girl 4',
        description: '...',
        tags: ['Dark', 'Girl'],
        imageUrl: darkGirl4,
    },
    {
        title: 'Dark Girl 5',
        description: '...',
        tags: ['Dark', 'Girl'],
        imageUrl: darkGirl5,
    },
    {
        title: 'Dark Girl 6',
        description: '...',
        tags: ['Dark', 'Girl'],
        imageUrl: darkGirl6,
    },
    {
        title: 'Dark Girl 7',
        description: '...',
        tags: ['Dark', 'Girl'],
        imageUrl: darkGirl7,
    },
    {
        title: 'Dark Girl 8',
        description: '...',
        tags: ['Dark', 'Girl'],
        imageUrl: darkGirl8,
    },
    {
        title: 'Dark Girl 9',
        description: '...',
        tags: ['Dark', 'Girl'],
        imageUrl: darkGirl9,
    },
] as const;

export const dichosCollection = [
    {
        title: 'Ahh Perro',
        description: '...',
        tags: ['...'],
        imageUrl: ahPerro,
    },
    {
        title: 'Drink Up Bitch',
        description: '...',
        tags: ['...'],
        imageUrl: drinkUpBitch,
    },
    {
        title: 'El Graduado',
        description: '...',
        tags: ['...'],
        imageUrl: elGraduado,
    },
    {
        title: 'La Graduada',
        description: '...',
        tags: ['...'],
        imageUrl: laGraduada,
    },
    {
        title: `I'm Proud of You`,
        description: '...',
        tags: ['...'],
        imageUrl: imProudOfYou,
    },
    {
        title: 'Karma Is a Blessing',
        description: '...',
        tags: ['...'],
        imageUrl: karma,
    },
    {
        title: 'Keep It Up',
        description: '...',
        tags: ['...'],
        imageUrl: keepItUp,
    },
    {
        title: 'Oilo',
        description: '...',
        tags: ['...'],
        imageUrl: oilo,
    },
    {
        title: 'Ring Ring Bitch',
        description: '...',
        tags: ['...'],
        imageUrl: ringRingBitch,
    },
    {
        title: 'Sí Se Pudo',
        description: '...',
        tags: ['...'],
        imageUrl: siSePudo,
    },
    {
        title: 'Spill the Tea',
        description: '...',
        tags: ['...'],
        imageUrl: spillTheTea,
    },
    {
        title: 'Te Quiero Muncho',
        description: '...',
        tags: ['...'],
        imageUrl: teQuieroMuncho,
    },
    {
        title: 'Traka',
        description: '...',
        tags: ['...'],
        imageUrl: traka,
    },
    {
        title: 'Tú Eres la Medicina',
        description: '...',
        tags: ['...'],
        imageUrl: medicina,
    },
] as const;

export const monthsCollection = [
    {
        title: 'April',
        description: '...',
        tags: ['April'],
        imageUrl: april,
    },
    {
        title: 'August',
        description: '...',
        tags: ['August'],
        imageUrl: august,
    },
    {
        title: 'February',
        description: '...',
        tags: ['February'],
        imageUrl: february,
    },
    {
        title: 'January',
        description: '...',
        tags: ['January'],
        imageUrl: january,
    },
    {
        title: 'July',
        description: '...',
        tags: ['July'],
        imageUrl: july,
    },
    {
        title: 'June',
        description: '...',
        tags: ['June'],
        imageUrl: june,
    },
    {
        title: 'March',
        description: '...',
        tags: ['March'],
        imageUrl: march,
    },
    {
        title: 'May',
        description: '...',
        tags: ['May'],
        imageUrl: may,
    },
    {
        title: 'October',
        description: '...',
        tags: ['October'],
        imageUrl: october,
    },
    {
        title: 'September',
        description: '...',
        tags: ['September'],
        imageUrl: september,
    },
] as const;