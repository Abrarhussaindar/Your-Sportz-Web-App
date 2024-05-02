import i18n from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"

i18n.use(LanguageDetector).use(initReactI18next).init({
    debug: true,
    lng: "en",
    resources: {
        en:{
            translation:{
                
                // home page
                // navbar elements
                logoLeft: "Your",
                logoRight: "Sportz",
                loginBtn: "Login",
                navHome: "Home",
                navAbout: "About Us",
                navFeatures: "Features",
                navPricing: "Pricing",
                navContact: "Contact Us",

                
                // hero section
                heroH1: "Game it your way",
                heroP: "Stream, Score, Soar: Your Local Football Arena in Your Pocket. Track Your Performance, Discover Tournaments, and Team Up. All in One Dynamic App",
                downloadIosBtn: "Download on IOS",
                downloadAndBtn: "Download on Android",


                // matches section
                matchesH2: "Why YourSportz Stands Out",
                matchesContainerHeading: "Do you Know",

                // index 1
                title1: "Intuitive Match Scoring Interface",
                desciption1: "Direct the game's score with a single touch using our scorer app. Accurately log goals, fouls, and more, with an 'Undo' feature for corrections. Simple, swift, and precise—be the game's definitive scorekeeper.",
                hoverTitle1: "Cardiovascular Health:",
                hoverDescription1: "The constant movement in football-covering 8 to 11 kilometers per game-keeps heart rates up.",

                // index 2
                title2: "Real-Time Match Commentary",
                desciption2: "Stay updated with every play. Our live commentary feature keeps you in the loop with minute-by-minute updates. From key plays to pivotal decisions, never miss a moment of the action.",
                hoverTitle2: "Strength Building",
                hoverDescription2: "Football works the entire body. Lower body strength is essential for kicking, jumping, and twisting, while upper body strength aids shielding the ball and overall power",

                // index 3
                title3: "Go Live: Stream Football With Flair",
                desciption3: "Elevate your football matches to a global stage with our advanced live streaming. Integrate effortlessly with your YouTube channel for maximum exposure, display dynamic score updates, and relish AI-crafted highlights of your game's peak moments. Ignite the spirit of football and share every goal and glory live with your audience.",
                hoverTitle3: "Muscle Tone and Fat Burn:",
                hoverDescription3: "Football engages both slow-twitch and fast-twitch muscle fibers, promoting muscle mass and fat loss. The aerobic-anaerobic energy pathways contribute to calorie burn.",

                // index 4
                title4: "Every Game, Every Word, In Your Language",
                desciption4: "Embrace the excitement of sports in your language with our app. Enjoy live commentary, real-time updates, and all the highlights in your preferred language. Break down language barriers and connect with the game like never before.",
                hoverTitle4: "Mental Toughness:",
                hoverDescription4: "Football sharpens concentration, decision-making, and teamwork. It fosters discipline, social engagement, and confidence.",
                
                
                
                // devices section
                androidApp: "Android App",
                iosApp: "ios App",


                // faq section
                faqh2: "Frequently Asked Questions",

                // id 1
                question1: "What is YourSport?",
                answer1: "YourSportz is an all-in-one football app, enabling HD match streaming, live scoring, and performance tracking. Connect with local games and tournaments, and follow top players – all in one dynamic platform.",

                // id 2
                question2: "Is YourSportz a fantasy sports or betting app?",
                answer2: "YourSportz is an all-in-one football app, enabling HD match streaming, live scoring, and performance tracking. Connect with local games and tournaments, and follow top players – all in one dynamic platform.",

                // id 3
                question3: "Can I follow specific local football teams or players on YourSportz?",
                answer3: "YourSportz is an all-in-one football app, enabling HD match streaming, live scoring, and performance tracking. Connect with local games and tournaments, and follow top players – all in one dynamic platform.",

                // id 4
                question4: "Is live streaming available for local football matches on YourSportz?",
                answer4: "YourSportz is an all-in-one football app, enabling HD match streaming, live scoring, and performance tracking. Connect with local games and tournaments, and follow top players – all in one dynamic platform.",

                // id 5
                question5: "What features does YourSportz offer?",
                answer5: "YourSportz is an all-in-one football app, enabling HD match streaming, live scoring, and performance tracking. Connect with local games and tournaments, and follow top players – all in one dynamic platform.",


                // footer section
                socialH2: "Social",
                    socialLi1: " Email",
                    socialLi2: " Instagram",
                needH2: "Need Help",
                    needLi1: "Contact Us",
                    needLi2: "Pricing",
                    needLi3: "FAQ",
                legalH2: "Legal",
                    legalLi1: "Terms of use",
                    legalLi2: "Privacy Policy",

                copyright: "yoursportz by Navrekh Technologies PVT LTD",


                // about us page
                aboutusRightH3: "Our Vision",
                aboutusRightP: "Empowering Passionate Athletes YourSportz envisions a world where every sports enthusiast, regardless of their chosen discipline, can pursue their passion  with unwavering dedication. We believe that sports transcend boundaries, cultures, and backgrounds, uniting people through shared experiences and achievements.",
                aboutusLeftH3: "Our Goal",
                aboutusLeftP: "Unleashing Athletic Potential Our goal is to create a comprehensive sports platform that caters o individuals across various sports and games. Here’s how we plan to achieve it:",
                
                
                aboutuslipspan1: "Multi-Sport Integration: ",
                aboutuslip1: "YourSportz will seamlessly integrate multiple sports and games, providing a unified hub for enthusiasts. Users can switch between tracking their basketball shots, soccer goals, tennis serves, and more—all within a single app.",
                aboutuslipspan2: "Personalized Experience: ",
                aboutuslip2: "We understand that each athlete’s journey is unique. YourSportz will tailor its features to cater to individual preferences. Personalized dashboards, training plans, and performance analytics will empower users to set and achieve their goals.",
                aboutuslipspan3: "Comprehensive Stats: ",
                aboutuslip3: "YourSportz will be a treasure trove of statistics. Users can track their performance metrics, including points scored, distance covered, speed, accuracy, and more. Whether you’re a weekend warrior or a professional athlete, our app will provide valuable insights to enhance your game.",
                aboutuslipspan4: "Community and Challenges: ",
                aboutuslip4: "Connecting athletes is at the heart of YourSportz. Users can join communities, share their achievements, and participate in challenges. Friendly competitions, leaderboards, and virtual events will foster camaraderie and healthy competition.",
                aboutuslipspan5: "Motivation and Rewards: ",
                aboutuslip5: "We believe in celebrating progress. Yoursportz will motivate users through achievements, badges, and  milestones. Whether it’s hitting a personal best or completing a fitness challenge, our app will recognize and reward dedication.",
                aboutuslipspan6: "Accessible and Inclusive: ",
                aboutuslip6: "Yoursportz aims to be accessible to all. We’ll ensure compatibility with various devices, operating systems, and skill levels. Language support, adaptive interfaces, and affordability will make Yoursportz a global sports companion.",
            
            
                // contact us page
                contactUsH3: "### We&apos;re Here to Help!",
                contactUsP: "**Got a question?** We love hearing from you! Whether you have a query about our services, need assistance, or you&apos;re crafting the next big idea and need some advice, our team is all ears.",
                
                formHeaderP: "Just fill out the form below, and we&apos;ll get back to you with lightning speed.",

                formName: "Full name",
                formPhone: "Phone Number",
                formEmail: "Email ID",
                formSub: "Subject",
                formMsg: "Messege",
                formTypeMsg: "Type Your messege",
                formSubmitBtn: "Submit",


                // terms and conditons page
                termsH1: "Terms and Conditions",

                termsTitle1: "Term and condition",
                    termsContent11: "YourSportz app prohibits nudity, violence, or pornography content; violators will be banned.",
                    termsContent12: "Users are solely responsible for posted content; YourSportz reserves the right to remove inappropriate content.",
                    termsContent13: "YourSportz isn't liable for technical issues; prompt resolution will be attempted.",
                    termsContent14: "Terms are subject to change; users will be notified of updates.",
                termsTitle2: "Cookie Policy:",
                    termsContent21: "Cookies enhance user experience by remembering preferences.",
                    termsContent22: "Types include essential, analytics, and advertising cookies.",
                    termsContent23: "Users can manage cookies in app settings; disabling may affect functionality.",
                termsTitle3: "Privacy Policy:",
                    termsContent31: "YourSportz collects personal and usage data for app functionality and analytics.",
                    termsContent32: "Data security measures are implemented; third-party services' privacy policies apply.",
                    termsContent33: "Policy updates may occur periodically; check the latest version in the app.",
                termsTitle4: "Privacy and Refund Policy:",
                    termsContent41: "User data is collected for statistics and insights, secured with encryption, and retained as necessary.",
                    termsContent42: "Users consent to data collection, usage, and retention by using the app.",
                    termsContent43: "Refunds are not issued for prepaid transactions unless services are defective or required by law.",
                termsTitle5: "YourSportz App Refund Policy:",
                    termsContent51: "Prepaid transactions are non-refundable once services are utilized.",
                    termsContent52: "Refunds may be considered for defective services within 7 days of usage.",
                    termsContent53: "Legal obligations may necessitate refunds as per applicable laws or regulations",

                termLeftP: "For any assistance, contact our customer support  @ yoursportz.in.",
                termLeftH4: "Thank you for choosing YourSportz!", 
            

                // privacy policy page
                privacyH1: "Privacy Policy",

                privacyTitle1: "Cookie Policy:",
                    privacyContent11: "Cookies enhance user experience by remembering preferences",
                    privacyContent12: "Types include essential, analytics, and advertising cookies.",
                    privacyContent13: "Users can manage cookies in app settings; disabling may affect functionality.",
                privacyTitle2: "Privacy Policy:",
                    privacyContent21: "YourSportz collects personal and usage data for app functionality and analytics.",
                    privacyContent22: "Data security measures are implemented; third-party services' privacy policies apply.",
                    privacyContent23: "Policy updates may occur periodically; check the latest version in the app.",
                privacyTitle3: "Privacy and Refund Policy:",
                    privacyContent31: "User data is collected for statistics and insights, secured with encryption, and retained as necessary.",
                    privacyContent32: "Users consent to data collection, usage, and retention by using the app.",
                    privacyContent33: "Refunds are not issued for prepaid transactions unless services are defective or required by law.",

                privacyLeftP: "For any assistance, contact our customer support @ yoursportz.in.",
                privacyLeftH4: "Thank you for choosing YourSportz!", 
            

            }
        },
        hi:{
            translation:{
                logoLeft: "आपका",
                logoRight: "स्पोर्ट्ज़",
                heroH1: "इसे अपने तरीके से खेलें",
                heroP: "स्ट्रीम, स्कोर, ऊंची उड़ान: आपकी जेब में आपका स्थानीय फुटबॉल क्षेत्र। अपने प्रदर्शन को ट्रैक करें, टूर्नामेंट खोजें और टीम बनाएं। ऑल इन वन डायनामिक ऐप",
                downloadIosBtn: "आईओएस पर डाउनलोड करें",
                downloadAndBtn: "एंड्रॉइड पर डाउनलोड करें",
                loginBtn: "लॉग इन करें",
                navHome: "घर",
                navAbout: "हमारे बारे में",
                navFeatures: "विशेषताएँ",
                navPricing: "मूल्य निर्धारण",
                navContact: "संपर्क करें",
            }
        },
        ar:{
            translation:{
                logoLeft: "لك",
                logoRight: "سبورتز",
                heroH1: "العبها على طريقتك",
                heroP: "قم بالبث والتسجيل والارتفاع: ساحة كرة القدم المحلية الخاصة بك في جيبك. تتبع أدائك، واكتشف البطولات، وكوّن فريقًا. الكل في تطبيق ديناميكي واحد",
                downloadIosBtn: "تحميل على دائرة الرقابة الداخلية",
                downloadAndBtn: "تحميل على الروبوت",
                loginBtn: "تسجيل الدخول",
                navHome: "بيت",
                navAbout: "معلومات عنا",
                navFeatures: "سمات",
                navPricing: "التسعير",
                navContact: "اتصل بنا",

            }
        },
        br:{
            translation:{
                logoLeft: "Seu",
                logoRight: "Esportez",
                heroH1: "Jogue do seu jeito",
                heroP: "Transmita, marque, voe: sua arena de futebol local no seu bolso. Acompanhe seu desempenho, descubra torneios e forme equipes. Aplicativo dinâmico tudo em um",
                downloadIosBtn: "Baixe no IOS",
                downloadAndBtn: "Baixe no Android",
                loginBtn: "Conecte-se",
                navHome: "Lar",
                navAbout: "Sobre nós",
                navFeatures: "Característicos",
                navPricing: "Preços",
                navContact: "Contate-nos",

            }
        },
        sp:{
            translation:{
                logoLeft: "Su",
                logoRight: "deportes",
                heroH1: "Juega a tu manera",
                heroP: "Transmite, anota, vuela: tu estadio de fútbol local en tu bolsillo. Realice un seguimiento de su rendimiento, descubra torneos y forme equipos. Aplicación dinámica todo en uno",
                downloadIosBtn: "Descargar en IOS",
                downloadAndBtn: "Descargar en Android",
                loginBtn: "Acceso",
                navHome: "Hogar",
                navAbout: "Sobre nosotras",
                navFeatures: "Características",
                navPricing: "Precios",
                navContact: "Contacta con nosotros",

            }
        },
        fr:{
            translation:{
                logoLeft: "Ton",
                logoRight: "Sportz",
                heroH1: "Jouez à votre façon",
                heroP: "Diffusez, marquez, montez en flèche : votre arène de football locale dans votre poche. Suivez vos performances, découvrez des tournois et faites équipe. Application dynamique tout-en-un",
                downloadIosBtn: "Télécharger sur IOS",
                downloadAndBtn: "Télécharger sur Android",
                loginBtn: "Se connecter",
                navHome: "Maison",
                navAbout: "À propos de nous",
                navFeatures: "Caractéristiques",
                navPricing: "Tarifs",
                navContact: "Contactez-nous",

            }
        },
        
        gr:{
            translation:{
                logoLeft: "Dein",
                logoRight: "Sportz",
                heroH1: "Spielen Sie es auf Ihre Art",
                heroP: "Streamen, punkten, aufsteigen: Ihre lokale Fußballarena in Ihrer Tasche. Verfolgen Sie Ihre Leistung, entdecken Sie Turniere und bilden Sie Teams. Alles in einer dynamischen App",
                downIos: "asdf",
                downloadIosBtn: "Auf IOS herunterladen",
                downloadAndBtn: "Auf Android herunterladen",
                loginBtn: "Anmeldung",
                navHome: "Heim",
                navAbout: "Über uns",
                navFeatures: "Merkmale",
                navPricing: "Preisgestaltung",
                navContact: "Kontaktiere uns",
            }
        },
        
        ko:{
            translation:{
                logoLeft: "당신의",
                logoRight: "스포츠",
                heroH1: "원하는 방식으로 게임을 즐겨보세요",
                heroP: "스트리밍, 득점, 활공: 주머니 속 지역 축구 경기장. 성과를 추적하고, 토너먼트를 발견하고, 팀을 구성하세요. 올인원 동적 앱",
                downloadIosBtn: "IOS에서 다운로드",
                downloadAndBtn: "안드로이드에서 다운로드",
                loginBtn: "로그인",
                navHome: "집",
                navAbout: "회사 소개",
                navFeatures: "특징",
                navPricing: "가격",
                navContact: "문의하기",
            }
        },
    }
})