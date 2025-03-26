/*import myAnimation from '../gif/myAnimation.gif';
import { useEffect, useState } from 'react';

const Home = () => {
  const [color, setColor] = useState('red');

  useEffect(() => {
    const colors = [
      'red', 'blue', 'green', 'yellow', 'purple',
      'orange', 'pink', 'cyan', 'magenta', 'lime',
      'brown', 'teal', 'navy', 'violet', 'gold',
      'silver', 'black', 'indigo', 'coral'
    ];  
    let index = 0;

    const interval = setInterval(() => {
      setColor(colors[index]);
      index = (index + 1) % colors.length;
    }, 300); 

    return () => clearInterval(interval);   
  }, []);

  return (
    <>
      <div>
        <div>😘😜😘😜😝😂🤣😍🤣😜😝😂😜😝😂😜😝😉😎😄🥰🤩🤗🤗😚😘😜😝😂🤣😍🤣🥰🤩🤗🤗😚😘😜😝😂🤣😍🤣😉😎😄🥰🤩🤗🤗😚</div>


        <h1>
        <span style={{ color: color, display: "inline-flex", alignItems: "center", gap: "8px" }}>
        <img src={myAnimation} alt="My Animation" style={{ width: "30px", height: "30px" }} />
        שלום הגעת לדף הבית של האתר המטורף שלנו
        <img src={myAnimation} alt="My Animation" style={{ width: "30px", height: "30px" }} />
      </span>        </h1>

        <div>😘😜😘😜😝😂😜😝😂😜😝😂😜😝🤣😍🤣😉😎😄🥰🤩🤗🤗😚😘😜😝😂🤣😍🤣🥰🤩🤗🤗😚😘😜😝😂🤣😍🤣😉😎😄🥰🤩🤗🤗😚</div>
      </div>
    </>
  );



}

export default Home;*/



//---------------------------------------

import React, { useState, useEffect } from 'react';
import re from './../images/5.png';
import re1 from './../images/1.png';
import re2 from './../images/2.png';
import re3 from './../images/3.png';
import re5 from './../images/4.png';

interface Feature {
  title: string;
  description: string;
  icon: string;
}

interface Plan {
  name: string;
  price: string;
  features: string[];
  color: string;
  recommended?: boolean;
}

interface Example {
  id: number;
  type: string;
  bg: string;
}

const HomePage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [activeFeature, setActiveFeature] = useState<number>(0);

  useEffect(() => {
    setIsLoaded(true);

    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % 4);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const features: Feature[] = [
    {
      title: "עיצוב תמונות מקצועי",
      description: "הפוך תמונות רגילות ליצירות אמנות עם כלי העריכה המתקדמים שלנו",
      icon: "✨"
    },
    {
      title: "פילטרים ייחודיים",
      description: "מגוון רחב של פילטרים מותאמים אישית שיעניקו לתמונות שלך מראה מושלם",
      icon: "🎨"
    },
    {
      title: "עיצוב בלחיצת כפתור",
      description: "השתמש בבינה מלאכותית כדי לעצב תמונות בצורה אוטומטית",
      icon: "🤖"
    },
    {
      title: "שיתוף ושמירה",
      description: "שתף את היצירות שלך ברשתות החברתיות או שמור אותן בענן הפרטי שלך",
      icon: "🔄"
    }
  ];

  // המידע על התוכניות
  const plans: Plan[] = [
    {
      name: "בסיסי",
      price: "חינם",
      features: ["עריכה בסיסית", "5 פילטרים", "שמירה ברזולוציה רגילה"],
      color: "bg-gradient-to-r from-blue-400 to-blue-500"
    },
    {
      name: "מקצועי",
      price: "₪29.90/חודש",
      features: ["כל הכלים המתקדמים", "כל הפילטרים", "שמירה ברזולוציה גבוהה", "ללא פרסומות", "תמיכה טכנית"],
      color: "bg-gradient-to-r from-purple-500 to-purple-700",
      recommended: true
    },
    {
      name: "עסקי",
      price: "₪79.90/חודש",
      features: ["כל התכונות המקצועיות", "עריכה ברזולוציה מקסימלית", "API לעסקים", "ליווי אישי"],
      color: "bg-gradient-to-r from-green-500 to-green-700"
    }
  ];

  // דוגמאות של עיצובים
  const examples: Example[] = [
    { id: 1, type: "לפני ואחרי", bg: "bg-pink-100" },
    { id: 2, type: "מודרני", bg: "bg-blue-100" },
    { id: 3, type: "וינטג'", bg: "bg-amber-100" },
    { id: 4, type: "מינימליסטי", bg: "bg-emerald-100" },
    { id: 5, type: "אומנותי", bg: "bg-purple-100" },
    { id: 6, type: "סגנון רטרו", bg: "bg-red-100" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 overflow-hidden">
      <header className={`relative h-screen flex items-center transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-pink-300 opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-blue-300 opacity-20 animate-pulse" style={{ animationDelay: "1s" }}></div>
          <div className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-purple-300 opacity-20 animate-pulse" style={{ animationDelay: "2s" }}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-12 md:mb-0 text-center md:text-right">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 tracking-tight">
                <span className="inline-block transform hover:scale-105 transition-transform duration-300">עצב.</span>{" "}
                <span className="inline-block transform hover:scale-105 transition-transform duration-300 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">שנה.</span>{" "}
                <span className="inline-block transform hover:scale-105 transition-transform duration-300">צור.</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 md:mx-0 max-w-lg mx-auto">
                פלטפורמת העיצוב המתקדמת ביותר שתהפוך את התמונות שלך ליצירות אמנות מרהיבות, בלי ידע מקצועי
              </p>
              <div className="flex justify-center md:justify-start space-x-4 mt-8 rtl:space-x-reverse">
                <button className="px-8 py-3 bg-purple-600 text-white font-medium rounded-lg shadow-lg hover:bg-purple-700 transition-colors duration-300 transform hover:scale-105">
                  התחל עכשיו - חינם
                </button>
                <button
                  className="px-8 py-3 bg-white text-purple-600 font-medium rounded-lg shadow-lg hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105"
                  onClick={() => {
                    window.location.href = 'src/im'; // עדכן את הנתיב לדף הרצוי
                  }}
                >
                  צפה בדוגמאות
                </button>

              </div>
            </div>

            <div className="w-full md:w-1/2 relative">
              <div className="relative aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 bg-white rounded-2xl shadow-2xl overflow-hidden transform rotate-3 transition-transform duration-500 hover:rotate-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-400/20"></div>
                  <div className="h-6 bg-gray-100 flex items-center px-2">
                    <div className="flex space-x-1 rtl:space-x-reverse">
                      <div className="w-2 h-2 rounded-full bg-red-400"></div>
                      <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                      <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    </div>
                  </div>
                  <div>
                  <img src={re} alt="עיצוב תמונה" className="object-cover" style={{ height: '200px' }} />
                  <img src={re1} alt="עיצוב תמונה" className="object-cover" style={{ height: '200px' }} />
                  <img src={re2} alt="עיצוב תמונה" className="object-cover" style={{ height: '200px' }} />
                  <img src={re3} alt="עיצוב תמונה" className="object-cover" style={{ height: '200px' }} />
                  <img src={re5} alt="עיצוב תמונה" className="object-cover" style={{ height: '200px' }} />
                  </div>
                </div>

                <div className="absolute -bottom-10 -right-10 w-2/3 aspect-square bg-white rounded-xl shadow-xl overflow-hidden transform -rotate-6 transition-transform duration-500 hover:rotate-0">
                  <div className="h-4 bg-gray-100"></div>
                  <img src="https://via.placeholder.com/400x400" alt="תמונה מעוצבת" className="object-cover" />
                </div>

                <div className="absolute top-20 -left-10 bg-white p-3 rounded-lg shadow-lg transform -rotate-12 transition-transform duration-500 hover:rotate-0">
                  <div className="w-24 h-3 bg-purple-200 rounded-full mb-2"></div>
                  <div className="w-16 h-3 bg-pink-200 rounded-full"></div>
                </div>
                <div className="absolute top-40 -right-5 bg-white p-2 rounded-lg shadow-lg transform rotate-12 transition-transform duration-500 hover:rotate-0">
                  <div className="w-4 h-4 rounded-full bg-yellow-400 mb-1"></div>
                  <div className="w-12 h-2 bg-gray-200 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>




    </div>
  );
};

export default HomePage;

