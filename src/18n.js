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
            

                // pricing page
                pricingH1: "Pick a plan that’s right for you",
                pricingP: "Pay as you go service, cancel anytime.",
                pricingH4: "Payment Methods",
                pricingbottomP: "We accept Visa, American Express, Mastercard, Paypal and Crypto",
                pricingToggelGeneral: "General",
                pricingToggelSchool: "School / Corporate",
                pricingBtn: "Choose",
                pricingSchoolPricingtag1: "6-Months",
                pricingSchoolPricingprice1: "25,000",
                pricingSchoolPricingpriceTag1: "With GST",
                pricingSchoolPricingpriceDis1: "Per member, per Year",
                    pricingSchoolPricingsubtitle11: "All features",
                        pricingSchoolPricingsubDetails111: "Membership Programs",
                        pricingSchoolPricingsubDetails112: "Group Discounts",
                    pricingSchoolPricingsubtitle12: "Includes 15 Free Live Matches",
                    pricingSchoolPricingsubtitle13: "Early Access to New Content",
                
                
                
                pricingSchoolPricingtag2: "per match live streamu",
                pricingSchoolPricingprice2: "15,000",
                pricingSchoolPricingpriceTag2: "with GST",
                    pricingSchoolPricingsubtitle21: "All features",
                        pricingSchoolPricingsubDetails211: "Membership Programs",
                        pricingSchoolPricingsubDetails212: "Exclusive Content",
                        pricingSchoolPricingsubDetails213: "Group Discounts",
                        pricingSchoolPricingsubDetails214: "Customizable Packages",
                    pricingSchoolPricingsubtitle22: "Includes 30 Free Live Matches",
                    pricingSchoolPricingsubtitle23: "Priority Support",


                pricingGeneralPricingprice1: "Free",
                    
                        pricingGeneralPricingsubDetails111: "Tourment creations",
                        pricingGeneralPricingsubDetails112: "Watch Score",
                        pricingGeneralPricingsubDetails113: "Start match",
                        pricingGeneralPricingsubDetails114: "Ad-Free Experience",


                pricingGeneralPricingtag2: "per match live stream",
                pricingGeneralPricingprice2: "149",
                pricingGeneralPricingpriceTag2: "with GST",
                    
                        pricingGeneralPricingsubDetails211: "All features",
                        pricingGeneralPricingsubDetails212: "One license key",
                        pricingGeneralPricingsubDetails213: "Yearly subcription plan",
                        pricingGeneralPricingsubDetails214: "One year support & updates",
                        pricingGeneralPricingsubDetails215: "Per month ad-free: ₹99",
                        pricingGeneralPricingsubDetails216: "6 month subscription: ₹499",
                        pricingGeneralPricingsubDetails217: "12 month subscription: ₹999",
                
                pricingGeneralPricingta31: "2 cameras",
                pricingGeneralPricingta32: "popular",
                pricingGeneralPricingprice3: "199",
                pricingGeneralPricingpriceTag3: "with GST",
                pricingGeneralPricingpriceDis3: "Per member, per Month",
                    
                        pricingGeneralPricingsubDetails311: "Per month ad-free: ₹99",
                        pricingGeneralPricingsubDetails312: "6 month subscription: ₹499",
                        pricingGeneralPricingsubDetails313: "12 month subscription: ₹99",

                pricingGeneralPricingta4: "4 cameras",
                pricingGeneralPricingprice4: "299",
                pricingGeneralPricingpriceTag4: "with GST",
                pricingGeneralPricingpriceDis4: "Per member, per Month",
                    
                        pricingGeneralPricingsubDetails411: "All features",
                        pricingGeneralPricingsubDetails412: "One license key",
                        pricingGeneralPricingsubDetails413: "Yearly subcription plan",
                        pricingGeneralPricingsubDetails414: "One year support & update",
                        pricingGeneralPricingsubDetails415: "Per month ad-free: ₹99",
                        pricingGeneralPricingsubDetails416: "6 month subscription: ₹499",
                        pricingGeneralPricingsubDetails417: "12 month subscription: ₹999",
                    

                // login form
                loginBackBtn: "Go Back",
                loginH1: "Welcome back!",
                loginH3: "Nice to see you again",
                loginP: "YourSportz, the dynamic football app, offers a plethora ofhealth and lifestyle benefits. Let&rsquo;s delve into how it can enhance your well-being",
                loginH4: "Login",
                loginFormEmail: "Welcome back!",
                loginFormPassword: "Welcome back!",
                loginFormEmailPlaceholder: "Enter your Email",
                loginFormPasswordPlaceholder: "Password",
                loginFormKeep: "Keep me logged in",
                loginFormForgotPassword: "Forgot Password?",
                loginFormAgreeLeft: "I agree to the",
                loginFormAgreeRight: "Terms of Service and Privacy Policy",
                loginFormLoginLoading: "Loading...",
                loginFormLoginBtn: "Login",
                loginFormBottomP: "Don&apos;t have an account?",
                loginFormRegister: "Register",


                // register form
                registerBackBtn: "Go Back",
                registerH1: "Welcome back!",
                registerH4: "Nice to see you again",
                registerP: "YourSportz, the dynamic football app, offers a plethora ofhealth and lifestyle benefits. Let&rsquo;s delve into how it can enhance your well-being",
                registerToggleGeneral: "General",
                registerToggleSchool: "School / Corporate",
                registerFormName: "Full name",
                registerFormInstit: "Institution",
                registerFormComp: "Company",
                registerFormAdd: "Address",
                registerFormEmail: "Email",
                registerFormPassword: "Password",
                registerFormConfirmPassword: "Confirm Password",
                registerFormAgree: "I agree to the Terms of Service and Privacy Policy",
                registerFormLoading: "Loading...",
                registerFormRegister: "Register",
                registerFormAlready: "Already have an account?",
                registerFormLogin: "Login",


                // forgot password
                forgetPasswordH3: "Forget password",
                forgetPasswordP: "Enter The email address associated with your account.",
                forgetPasswordLoading: "Loading...",
                forgetPasswordSubmit: "Submit",
                forgetPasswordBack: "Back to login",
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
                // matches section
                matchesH2: "योरस्पोर्ट्ज़ अलग क्यों है?",
                matchesContainerHeading: "क्या आप जानते हैं",

                // index 1
                title1: "सहज ज्ञान युक्त मैच स्कोरिंग इंटरफ़ेस",
                desciption1: "हमारे स्कोरर ऐप का उपयोग करके एक स्पर्श से गेम के स्कोर को निर्देशित करें। सुधार के लिए 'पूर्ववत करें' सुविधा के साथ लक्ष्यों, फ़ाउलों और अन्य चीज़ों को सटीक रूप से लॉग करें। सरल, तेज़ और सटीक—गेम का निश्चित स्कोरकीपर बनें।",
                hoverTitle1: "हृदय स्वास्थ्य:",
                hoverDescription1: "फ़ुटबॉल में निरंतर गति - प्रति खेल 8 से 11 किलोमीटर की दूरी - हृदय गति को बनाए रखती है।",

                // index 2
                title2: "रीयल-टाइम मैच कमेंट्री",
                desciption2: "रीयल-टाइम मैच कमेंट्री",
                hoverTitle2: "शक्ति निर्माण",
                hoverDescription2: "फुटबॉल से पूरा शरीर काम करता है। किक मारने, कूदने और घुमाने के लिए शरीर के निचले हिस्से की ताकत आवश्यक है, जबकि ऊपरी शरीर की ताकत गेंद को बचाने और समग्र शक्ति में सहायता करती है",

                // index 3
                title3: "लाइव हों: फ़्लेयर के साथ फ़ुटबॉल स्ट्रीम करें",
                desciption3: "हमारी उन्नत लाइव स्ट्रीमिंग के साथ अपने फ़ुटबॉल मैचों को वैश्विक स्तर पर पहुँचाएँ। अधिकतम प्रदर्शन के लिए अपने यूट्यूब चैनल के साथ सहजता से एकीकृत करें, गतिशील स्कोर अपडेट प्रदर्शित करें और अपने गेम के चरम क्षणों के एआई-निर्मित हाइलाइट्स का आनंद लें। फ़ुटबॉल की भावना को प्रज्वलित करें और प्रत्येक लक्ष्य और गौरव को अपने दर्शकों के साथ लाइव साझा करें।",
                hoverTitle3: "मांसपेशियों की टोन और फैट बर्न:",
                hoverDescription3: "फ़ुटबॉल धीमी-चिकोटी और तेज़-चिकोटी मांसपेशी फाइबर दोनों को शामिल करता है, जिससे मांसपेशियों और वसा हानि को बढ़ावा मिलता है। एरोबिक-एनारोबिक ऊर्जा मार्ग कैलोरी बर्न में योगदान करते हैं।",

                // index 4
                title4: "हर खेल, हर शब्द, आपकी भाषा में",
                desciption4: "हमारे ऐप के साथ अपनी भाषा में खेल के उत्साह को अपनाएं। अपनी पसंदीदा भाषा में लाइव कमेंट्री, रीयल-टाइम अपडेट और सभी हाइलाइट्स का आनंद लें। भाषा संबंधी बाधाओं को तोड़ें और खेल से ऐसे जुड़ें जैसा पहले कभी नहीं हुआ था।",
                hoverTitle4: "मानसिक क्रूरता:",
                hoverDescription4: "फुटबॉल एकाग्रता, निर्णय लेने और टीम वर्क को तेज करता है। यह अनुशासन, सामाजिक जुड़ाव और आत्मविश्वास को बढ़ावा देता है।",
                
                
                
                // devices section
                androidApp: "एंड्रॉइड ऐप",
                iosApp: "आईओएस ऐप",


                // faq section
                faqh2: "अक्सर पूछे जाने वाले प्रश्नों",

                // id 1
                question1: "Yousportz क्या है?",
                answer1: "YourSportz एक ऑल-इन-वन फुटबॉल ऐप है, जो एचडी मैच स्ट्रीमिंग, लाइव स्कोरिंग और प्रदर्शन ट्रैकिंग को सक्षम करता है। स्थानीय खेलों और टूर्नामेंटों से जुड़ें, और शीर्ष खिलाड़ियों का अनुसरण करें - सभी एक गतिशील मंच पर।",

                // id 2
                question2: "क्या YourSportz एक फंतासी खेल या सट्टेबाजी ऐप है?",
                answer2: "YourSportz एक ऑल-इन-वन फुटबॉल ऐप है, जो एचडी मैच स्ट्रीमिंग, लाइव स्कोरिंग और प्रदर्शन ट्रैकिंग को सक्षम करता है। स्थानीय खेलों और टूर्नामेंटों से जुड़ें, और शीर्ष खिलाड़ियों का अनुसरण करें - सभी एक गतिशील मंच पर।.",

                // id 3
                question3: "क्या मैं YourSportz पर विशिष्ट स्थानीय फ़ुटबॉल टीमों या खिलाड़ियों का अनुसरण कर सकता हूँ?",
                answer3: "YourSportz एक ऑल-इन-वन फुटबॉल ऐप है, जो एचडी मैच स्ट्रीमिंग, लाइव स्कोरिंग और प्रदर्शन ट्रैकिंग को सक्षम करता है। स्थानीय खेलों और टूर्नामेंटों से जुड़ें, और शीर्ष खिलाड़ियों का अनुसरण करें - सभी एक गतिशील मंच पर।",

                // id 4
                question4: "क्या YourSportz पर स्थानीय फ़ुटबॉल मैचों की लाइव स्ट्रीमिंग उपलब्ध है?",
                answer4: "YourSportz एक ऑल-इन-वन फुटबॉल ऐप है, जो एचडी मैच स्ट्रीमिंग, लाइव स्कोरिंग और प्रदर्शन ट्रैकिंग को सक्षम करता है। स्थानीय खेलों और टूर्नामेंटों से जुड़ें, और शीर्ष खिलाड़ियों का अनुसरण करें - सभी एक गतिशील मंच पर।",

                // id 5
                question5: "YourSportz क्या सुविधाएँ प्रदान करता है?",
                answer5: "YourSportz एक ऑल-इन-वन फुटबॉल ऐप है, जो एचडी मैच स्ट्रीमिंग, लाइव स्कोरिंग और प्रदर्शन ट्रैकिंग को सक्षम करता है। स्थानीय खेलों और टूर्नामेंटों से जुड़ें, और शीर्ष खिलाड़ियों का अनुसरण करें - सभी एक गतिशील मंच पर।",


                // footer section
                socialH2: "सामाजिक",
                    socialLi1: " ईमेल",
                    socialLi2: " Instagram",
                needH2: "मदद की ज़रूरत है",
                    needLi1: "संपर्क करें",
                    needLi2: "मूल्य निर्धारण",
                    needLi3: "सामान्य प्रश्न",
                legalH2: "कानूनी",
                    legalLi1: "Terms of use",
                    legalLi2: "गोपनीयता नीति",

                copyright: "नवरेख टेक्नोलॉजीज प्राइवेट लिमिटेड द्वारा आपका खेल",


                // about us page
                aboutusRightH3: "हमारा नज़रिया",
                aboutusRightP: "जुनूनी एथलीटों को सशक्त बनाना YourSportz एक ऐसी दुनिया की कल्पना करता है जहां हर खेल प्रेमी, अपने चुने हुए अनुशासन की परवाह किए बिना, अटूट समर्पण के साथ अपने जुनून को आगे बढ़ा सके। हमारा मानना ​​है कि खेल सीमाओं, संस्कृतियों और पृष्ठभूमियों से परे हैं, साझा अनुभवों और उपलब्धियों के माध्यम से लोगों को एकजुट करते हैं।",
                aboutusLeftH3: "हमारा लक्ष्य",
                aboutusLeftP: "एथलेटिक क्षमता को उजागर करना हमारा लक्ष्य एक व्यापक खेल मंच तैयार करना है जो विभिन्न खेलों में व्यक्तियों की जरूरतों को पूरा करता है। यहां बताया गया है कि हम इसे कैसे हासिल करने की योजना बना रहे हैं:",
                
                
                aboutuslipspan1: "बहु-खेल एकीकरण: ",
                aboutuslip1: "YourSportz कई खेलों को सहजता से एकीकृत करेगा, जो उत्साही लोगों के लिए एक एकीकृत केंद्र प्रदान करेगा। उपयोगकर्ता एक ही ऐप के भीतर अपने बास्केटबॉल शॉट्स, सॉकर गोल, टेनिस सर्व और बहुत कुछ ट्रैक करने के बीच स्विच कर सकते हैं।",
                aboutuslipspan2: "वैयक्तिकृत अनुभव:",
                aboutuslip2: "हम समझते हैं कि प्रत्येक एथलीट की यात्रा अद्वितीय है। YourSportz व्यक्तिगत प्राथमिकताओं को पूरा करने के लिए अपनी सुविधाओं को तैयार करेगा। वैयक्तिकृत डैशबोर्ड, प्रशिक्षण योजनाएं और प्रदर्शन विश्लेषण उपयोगकर्ताओं को अपने लक्ष्य निर्धारित करने और प्राप्त करने में सशक्त बनाएंगे।",
                aboutuslipspan3: "व्यापक आँकड़े:",
                aboutuslip3: "YourSportz आंकड़ों का खजाना होगा। उपयोगकर्ता अपने प्रदर्शन मेट्रिक्स को ट्रैक कर सकते हैं, जिसमें प्राप्त अंक, तय की गई दूरी, गति, सटीकता और बहुत कुछ शामिल हैं। चाहे आप सप्ताहांत योद्धा हों या पेशेवर एथलीट, हमारा ऐप आपके खेल को बेहतर बनाने के लिए मूल्यवान जानकारी प्रदान करेगा।",
                aboutuslipspan4: "समुदाय और चुनौतियाँ:",
                aboutuslip4: "एथलीटों को जोड़ना YourSportz के केंद्र में है। उपयोगकर्ता समुदायों में शामिल हो सकते हैं, अपनी उपलब्धियाँ साझा कर सकते हैं और चुनौतियों में भाग ले सकते हैं। मैत्रीपूर्ण प्रतियोगिताएं, लीडरबोर्ड और आभासी कार्यक्रम सौहार्द और स्वस्थ प्रतिस्पर्धा को बढ़ावा देंगे।",
                aboutuslipspan5: "प्रेरणा और पुरस्कार:",
                aboutuslip5: "हम प्रगति का जश्न मनाने में विश्वास करते हैं। Yoursportz उपलब्धियों, बैज और मील के पत्थर के माध्यम से उपयोगकर्ताओं को प्रेरित करेगा। चाहे वह व्यक्तिगत सर्वश्रेष्ठ प्रदर्शन करना हो या फिटनेस चुनौती पूरी करना हो, हमारा ऐप समर्पण को पहचानेगा और पुरस्कृत करेगा।",
                aboutuslipspan6: "सुलभ और समावेशी:",
                aboutuslip6: "योरस्पोर्ट्ज़ का लक्ष्य सभी के लिए सुलभ होना है। हम विभिन्न उपकरणों, ऑपरेटिंग सिस्टम और कौशल स्तरों के साथ अनुकूलता सुनिश्चित करेंगे। भाषा समर्थन, अनुकूली इंटरफेस और सामर्थ्य योरस्पोर्ट्ज़ को एक वैश्विक खेल साथी बना देगा।",
            
            
                // contact us page
                contactUsH3: "### हम मदद के लिए यहां हैं!",
                contactUsP: "**कोई प्रश्न है?** हमें आपसे सुनना अच्छा लगता है! चाहे आपके पास हमारी सेवाओं के बारे में कोई प्रश्न हो, सहायता की आवश्यकता हो, या आप अगला बड़ा विचार तैयार कर रहे हों और आपको कुछ सलाह की आवश्यकता हो, हमारी टीम आपकी मदद करेगी।",
                
                formHeaderP: "बस नीचे दिया गया फॉर्म भरें, और हम बिजली की गति से आपसे संपर्क करेंगे।",

                formName: "पूरा नाम",
                formPhone: "फ़ोन नंबर",
                formEmail: "ईमेल आईडी",
                formSub: "विषय",
                formMsg: "संदेश",
                formTypeMsg: "अपना संदेश टाइप करें",
                formSubmitBtn: "जमा करना",


                // terms and conditons page
                termsH1: "नियम और शर्तें",

                termsTitle1: "नियम और शर्तें",
                    termsContent11: "YourSportz ऐप नग्नता, हिंसा या अश्लील सामग्री को प्रतिबंधित करता है; उल्लंघन करने वालों पर प्रतिबंध लगाया जाएगा.",
                    termsContent12: "उपयोगकर्ता पोस्ट की गई सामग्री के लिए पूरी तरह जिम्मेदार हैं; YourSportz अनुचित सामग्री को हटाने का अधिकार सुरक्षित रखता है।",
                    termsContent13: "तकनीकी समस्याओं के लिए YourSportz उत्तरदायी नहीं है; शीघ्र समाधान का प्रयास किया जाएगा।",
                    termsContent14: "शर्तें परिवर्तन के अधीन हैं; उपयोगकर्ताओं को अपडेट के बारे में सूचित किया जाएगा.",
                termsTitle2: "कूकी नीति:",
                    termsContent21: "कुकीज़ प्राथमिकताओं को याद रखकर उपयोगकर्ता अनुभव को बढ़ाती हैं।",
                    termsContent22: "प्रकारों में आवश्यक, विश्लेषणात्मक और विज्ञापन कुकीज़ शामिल हैं।",
                    termsContent23: "उपयोगकर्ता ऐप सेटिंग में कुकीज़ प्रबंधित कर सकते हैं; अक्षम करने से कार्यक्षमता प्रभावित हो सकती है.",
                termsTitle3: "गोपनीयता नीति:",
                    termsContent31: "YourSportz ऐप की कार्यक्षमता और विश्लेषण के लिए व्यक्तिगत और उपयोग डेटा एकत्र करता है।",
                    termsContent32: "डेटा सुरक्षा उपाय लागू किए गए हैं; तृतीय-पक्ष सेवाओं की गोपनीयता नीतियां लागू होती हैं।डेटा उपाय सुरक्षा लागू की गई हैं; तृतीय-पक्ष सेवाओं की गंभीर नीतियाँ लागू होती हैं। नीति अद्यतन समय-समय पर हो सकते हैं; ऐप में नवीनतम संस्करण जांचें।",
                termsTitle4: "गोपनीयता और धनवापसी नीति:",
                    termsContent41: "उपयोगकर्ता डेटा को आंकड़ों और अंतर्दृष्टि के लिए एकत्र किया जाता है, एन्क्रिप्शन के साथ सुरक्षित किया जाता है, और आवश्यकतानुसार बनाए रखा जाता है।",
                    termsContent42: "उपयोगकर्ता ऐप का उपयोग करके डेटा संग्रह, उपयोग और प्रतिधारण के लिए सहमति देते हैं।",
                    termsContent43: "प्रीपेड लेनदेन के लिए रिफंड तब तक जारी नहीं किया जाता जब तक कि सेवाएँ दोषपूर्ण न हों या कानून द्वारा आवश्यक न हों।",
                termsTitle5: "योरस्पोर्ट्ज़ ऐप रिफंड नीति:",
                    termsContent51: "एक बार सेवाओं का उपयोग करने के बाद प्रीपेड लेनदेन वापस नहीं किया जाएगा।",
                    termsContent52: "उपयोग के 7 दिनों के भीतर दोषपूर्ण सेवाओं के लिए रिफंड पर विचार किया जा सकता है।",
                    termsContent53: "कानूनी दायित्वों के लिए लागू कानूनों या विनियमों के अनुसार रिफंड की आवश्यकता हो सकती है",

                termLeftP: "किसी भी सहायता के लिए, हमारे ग्राहक सहायता @ yoursportz.in पर संपर्क करें।",
                termLeftH4: "योरस्पोर्ट्ज़ को चुनने के लिए धन्यवाद!", 
            

                // privacy policy page
                privacyH1: "गोपनीयता नीति",

                privacyTitle1: "कूकी नीति:",
                    privacyContent11: "कुकीज़ प्राथमिकताओं को याद रखकर उपयोगकर्ता अनुभव को बढ़ाती हैं।",
                    privacyContent12: "प्रकारों में आवश्यक, विश्लेषणात्मक और विज्ञापन कुकीज़ शामिल हैं।",
                    privacyContent13: "उपयोगकर्ता ऐप सेटिंग में कुकीज़ प्रबंधित कर सकते हैं; अक्षम करने से कार्यक्षमता प्रभावित हो सकती है.",
                privacyTitle2: "गोपनीयता नीति:",
                    privacyContent21: "YourSportz ऐप की कार्यक्षमता और विश्लेषण के लिए व्यक्तिगत और उपयोग डेटा एकत्र करता है।",
                    privacyContent22: "डेटा सुरक्षा उपाय लागू किए गए हैं; तृतीय-पक्ष सेवाओं की गोपनीयता नीतियाँ लागू होती हैं।",
                    privacyContent23: "नीति अद्यतन समय-समय पर हो सकते हैं; ऐप में नवीनतम संस्करण जांचें।",
                privacyTitle3: "गोपनीयता और धनवापसी नीति:",
                    privacyContent31: "उपयोगकर्ता डेटा को आंकड़ों और अंतर्दृष्टि के लिए एकत्र किया जाता है, एन्क्रिप्शन के साथ सुरक्षित किया जाता है, और आवश्यकतानुसार बनाए रखा जाता है।",
                    privacyContent32: "उपयोगकर्ता ऐप का उपयोग करके डेटा संग्रह, उपयोग और प्रतिधारण के लिए सहमति देते हैं।",
                    privacyContent33: "प्रीपेड लेनदेन के लिए रिफंड तब तक जारी नहीं किया जाता जब तक कि सेवाएँ दोषपूर्ण न हों या कानून द्वारा आवश्यक न हों।",

                privacyLeftP: "किसी भी सहायता के लिए, हमारे ग्राहक सहायता @ yoursportz.in पर संपर्क करें।",
                privacyLeftH4: "योरस्पोर्ट्ज़ को चुनने के लिए धन्यवाद!", 
            

                // pricing page
                pricingH1: "वह योजना चुनें जो आपके लिए सही हो",
                pricingP: "सेवा लेते ही भुगतान करें, किसी भी समय रद्द करें।",
                pricingH4: "भुगतान की विधि",
                pricingbottomP: "हम वीज़ा, अमेरिकन एक्सप्रेस, मास्टरकार्ड, पेपैल और क्रिप्टो स्वीकार करते हैं",
                pricingToggelGeneral: "सामान्य",
                pricingToggelSchool: "स्कूल/कॉर्पोरेट",
                pricingBtn: "चुनना",
                pricingSchoolPricingtag1: "6 महीने",
                pricingSchoolPricingprice1: "25,000",
                pricingSchoolPricingpriceTag1: "जीएसटी के साथ",
                pricingSchoolPricingpriceDis1: "प्रति सदस्य, प्रति वर्ष",
                    pricingSchoolPricingsubtitle11: "सभी सुविधाएं",
                        pricingSchoolPricingsubDetails111: "सदस्यता कार्यक्रम",
                        pricingSchoolPricingsubDetails112: "समूह छूट",
                    pricingSchoolPricingsubtitle12: "15 निःशुल्क लाइव मैच शामिल हैं",
                    pricingSchoolPricingsubtitle13: "नई सामग्री तक शीघ्र पहुंच",
                
                
                
                pricingSchoolPricingtag2: "प्रति मैच लाइव स्ट्रीमू",
                pricingSchoolPricingprice2: "15,000",
                pricingSchoolPricingpriceTag2: "जीएसटी के साथ",
                    pricingSchoolPricingsubtitle21: "सभी सुविधाएं",
                        pricingSchoolPricingsubDetails211: "सदस्यता कार्यक्रम",
                        pricingSchoolPricingsubDetails212: "विशिष्ट सामग्री",
                        pricingSchoolPricingsubDetails213: "समूह छूट",
                        pricingSchoolPricingsubDetails214: "अनुकूलन योग्य पैकेज",
                    pricingSchoolPricingsubtitle22: "30 निःशुल्क लाइव मैच शामिल हैं",
                    pricingSchoolPricingsubtitle23: "प्राथमिकता समर्थन",


                pricingGeneralPricingprice1: "मुक्त",
                    
                        pricingGeneralPricingsubDetails111: "यात्रा रचनाएँ",
                        pricingGeneralPricingsubDetails112: "स्कोर देखें",
                        pricingGeneralPricingsubDetails113: "मैच प्रारंभ करें",
                        pricingGeneralPricingsubDetails114: "विज्ञापन-मुक्त अनुभव",


                pricingGeneralPricingtag2: "प्रति मैच लाइव स्ट्रीम",
                pricingGeneralPricingprice2: "149",
                pricingGeneralPricingpriceTag2: "प्रति मैच लाइव स्ट्रीम",
                    
                        pricingGeneralPricingsubDetails211: "सभी सुविधाएं",
                        pricingGeneralPricingsubDetails212: "एक लाइसेंस कुंजी",
                        pricingGeneralPricingsubDetails213: "वार्षिक सदस्यता योजना",
                        pricingGeneralPricingsubDetails214: "एक वर्ष का समर्थन और अद्यतन",
                        pricingGeneralPricingsubDetails215: "प्रति माह विज्ञापन-मुक्त: ₹99",
                        pricingGeneralPricingsubDetails216: "6 महीने की सदस्यता: ₹499",
                        pricingGeneralPricingsubDetails217: "12 महीने की सदस्यता: ₹999",
                
                pricingGeneralPricingta31: "2 कैमरे",
                pricingGeneralPricingta32: "लोकप्रिय",
                pricingGeneralPricingprice3: "199",
                pricingGeneralPricingpriceTag3: "जीएसटी के साथ",
                pricingGeneralPricingpriceDis3: "प्रति सदस्य, प्रति माह",
                    
                        pricingGeneralPricingsubDetails311: "प्रति माह विज्ञापन-मुक्त: ₹99",
                        pricingGeneralPricingsubDetails312: "6 महीने की सदस्यता: ₹499",
                        pricingGeneralPricingsubDetails313: "12 महीने की सदस्यता: ₹99",

                pricingGeneralPricingta4: "4 कैमरे",
                pricingGeneralPricingprice4: "299",
                pricingGeneralPricingpriceTag4: "जीएसटी के साथ",
                pricingGeneralPricingpriceDis4: "प्रति सदस्य, प्रति माह",
                    
                        pricingGeneralPricingsubDetails411: "सभी सुविधाएं",
                        pricingGeneralPricingsubDetails412: "एक लाइसेंस कुंजी",
                        pricingGeneralPricingsubDetails413: "वार्षिक सदस्यता योजना",
                        pricingGeneralPricingsubDetails414: "एक वर्ष का समर्थन और अद्यतन",
                        pricingGeneralPricingsubDetails415: "प्रति माह विज्ञापन-मुक्त: ₹99",
                        pricingGeneralPricingsubDetails416: "6 महीने की सदस्यता: ₹499",
                        pricingGeneralPricingsubDetails417: "12 महीने की सदस्यता: ₹999",
                    

                // login form
                loginBackBtn: "वापस जाओ",
                loginH1: "वापसी पर स्वागत है!",
                loginH3: "आप को दुबारा देखकर अच्छा लगा",
                loginP: "योरस्पोर्ट्ज़, गतिशील फुटबॉल ऐप, ढेर सारे स्वास्थ्य और जीवनशैली लाभ प्रदान करता है। आइए देखें कि यह आपकी भलाई को कैसे बढ़ा सकता है",
                loginH4: "लॉग इन करें",
                loginFormEmail: "ईमेल",
                loginFormPassword: "पासवर्ड",
                loginFormEmailPlaceholder: "अपना ईमेल दर्ज करें",
                loginFormPasswordPlaceholder: "पासवर्ड",
                loginFormKeep: "मुझे लोग्ड इन रखें",
                loginFormForgotPassword: "पासवर्ड भूल गए?",
                loginFormAgreeLeft: "मैं करने के लिए सहमत हूं",
                loginFormAgreeRight: "सेवा की शर्तें और गोपनीयता नीति",
                loginFormLoginLoading: "लोड हो रहा है...",
                loginFormLoginBtn: "लॉग इन करें",
                loginFormBottomP: "क्या आपके पास खाता नहीं है?",
                loginFormRegister: "पंजीकरण करवाना",


                // register form
                registerBackBtn: "वापस जाओ",
                registerH1: "वापसी पर स्वागत है!",
                registerH4: "आप को दुबारा देखकर अच्छा लगा",
                registerP: "योरस्पोर्ट्ज़, गतिशील फुटबॉल ऐप, ढेर सारे स्वास्थ्य और जीवनशैली लाभ प्रदान करता है। आइए देखें कि यह आपकी भलाई को कैसे बढ़ा सकता है",
                registerToggleGeneral: "सामान्य",
                registerToggleSchool: "स्कूल/कॉर्पोरेट",
                registerFormName: "पूरा नाम",
                registerFormInstit: "संस्थान",
                registerFormComp: "कंपनी",
                registerFormAdd: "पता",
                registerFormEmail: "ईमेल",
                registerFormPassword: "पासवर्ड",
                registerFormConfirmPassword: "पासवर्ड की पुष्टि कीजिये",
                registerFormAgree: "मैं सेवा की शर्तों और गोपनीयता नीति से सहमत हूं",
                registerFormLoading: "लोड हो रहा है...",
                registerFormRegister: "पंजीकरण करवाना",
                registerFormAlready: "क्या आपके पास पहले से एक खाता मौजूद है?",
                registerFormLogin: "लॉग इन करें",


                // forgot password
                forgetPasswordH3: "पासवर्ड भूल गए",
                forgetPasswordP: "अपने खाते से संबद्ध ईमेल पता दर्ज करें.",
                forgetPasswordLoading: "लोड हो रहा है...",
                forgetPasswordSubmit: "जमा करना",
                forgetPasswordBack: "लॉगिन पर वापस जाएं",
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
                // matches section
                matchesH2: "لماذا تبرز YourSportz",
                matchesContainerHeading: "هل تعرف",

                // index 1
                title1: "واجهة بديهية لتسجيل النتائج",
                desciption1: "قم بتوجيه نتيجة اللعبة بلمسة واحدة باستخدام تطبيق الهداف الخاص بنا. قم بتسجيل الأهداف والأخطاء وغير ذلك بدقة، باستخدام ميزة 'التراجع' لإجراء التصحيحات. بسيطة وسريعة ودقيقة - كن صاحب النتيجة النهائية للعبة.",
                hoverTitle1: "صحة القلب والأوعية الدموية:",
                hoverDescription1: "الحركة المستمرة في كرة القدم التي تغطي 8 إلى 11 كيلومترًا في المباراة الواحدة تحافظ على ارتفاع معدلات ضربات القلب.",

                // index 2
                title2: "تعليق المباراة في الوقت الحقيقي",
                desciption2: "ابق على اطلاع بكل لعبة. تتيح لك ميزة التعليقات المباشرة لدينا البقاء على اطلاع بالتحديثات دقيقة بدقيقة. بدءًا من المسرحيات الرئيسية ووصولاً إلى القرارات المحورية، لا تفوت أي لحظة من الأحداث.",
                hoverTitle2: "بناء القوة",
                hoverDescription2: "كرة القدم تعمل على تشغيل الجسم بأكمله. تعتبر قوة الجزء السفلي من الجسم ضرورية للركل والقفز والالتواء، بينما تساعد قوة الجزء العلوي من الجسم على حماية الكرة والقوة الإجمالية",

                // index 3
                title3: "البث المباشر: بث كرة القدم بأسلوب مميز",
                desciption3: "ارفع مستوى مباريات كرة القدم الخاصة بك إلى مستوى عالمي من خلال البث المباشر المتقدم. يمكنك التكامل بسهولة مع قناتك على YouTube للحصول على أقصى قدر من التعرض وعرض تحديثات النتائج الديناميكية والاستمتاع بأبرز اللحظات التي تم تصميمها بواسطة الذكاء الاصطناعي في لحظات الذروة في لعبتك. أشعل روح كرة القدم وشارك كل هدف ومجد مباشرة مع جمهورك.",
                hoverTitle3: "لهجة العضلات وحرق الدهون:",
                hoverDescription3: "تعمل كرة القدم على إشراك الألياف العضلية البطيئة والسريعة الانقباض، مما يعزز كتلة العضلات وفقدان الدهون. تساهم مسارات الطاقة الهوائية واللاهوائية في حرق السعرات الحرارية.",

                // index 4
                title4: "كل لعبة، كل كلمة، في لغتك",
                desciption4: "استمتع بإثارة الرياضة بلغتك من خلال تطبيقنا. استمتع بالتعليقات المباشرة والتحديثات في الوقت الفعلي وجميع النقاط البارزة بلغتك المفضلة. اكسر حواجز اللغة وتواصل مع اللعبة كما لم يحدث من قبل.",
                hoverTitle4: "الصلابة الذهنية:",
                hoverDescription4: "تعمل كرة القدم على زيادة التركيز وصنع القرار والعمل الجماعي. إنه يعزز الانضباط والمشاركة الاجتماعية والثقة.",
                
                
                
                // devices section
                androidApp: "الروبوت التطبيق",
                iosApp: "تطبيق دائرة الرقابة الداخلية",


                // faq section
                faqh2: "أسئلة مكررة",

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
            

                // pricing page
                pricingH1: "Pick a plan that’s right for you",
                pricingP: "Pay as you go service, cancel anytime.",
                pricingH4: "Payment Methods",
                pricingbottomP: "We accept Visa, American Express, Mastercard, Paypal and Crypto",
                pricingToggelGeneral: "General",
                pricingToggelSchool: "School / Corporate",
                pricingBtn: "Choose",
                pricingSchoolPricingtag1: "6-Months",
                pricingSchoolPricingprice1: "25,000",
                pricingSchoolPricingpriceTag1: "With GST",
                pricingSchoolPricingpriceDis1: "Per member, per Year",
                    pricingSchoolPricingsubtitle11: "All features",
                        pricingSchoolPricingsubDetails111: "Membership Programs",
                        pricingSchoolPricingsubDetails112: "Group Discounts",
                    pricingSchoolPricingsubtitle12: "Includes 15 Free Live Matches",
                    pricingSchoolPricingsubtitle13: "Early Access to New Content",
                
                
                
                pricingSchoolPricingtag2: "per match live streamu",
                pricingSchoolPricingprice2: "15,000",
                pricingSchoolPricingpriceTag2: "with GST",
                    pricingSchoolPricingsubtitle21: "All features",
                        pricingSchoolPricingsubDetails211: "Membership Programs",
                        pricingSchoolPricingsubDetails212: "Exclusive Content",
                        pricingSchoolPricingsubDetails213: "Group Discounts",
                        pricingSchoolPricingsubDetails214: "Customizable Packages",
                    pricingSchoolPricingsubtitle22: "Includes 30 Free Live Matches",
                    pricingSchoolPricingsubtitle23: "Priority Support",


                pricingGeneralPricingprice1: "Free",
                    
                        pricingGeneralPricingsubDetails111: "Tourment creations",
                        pricingGeneralPricingsubDetails112: "Watch Score",
                        pricingGeneralPricingsubDetails113: "Start match",
                        pricingGeneralPricingsubDetails114: "Ad-Free Experience",


                pricingGeneralPricingtag2: "per match live stream",
                pricingGeneralPricingprice2: "149",
                pricingGeneralPricingpriceTag2: "with GST",
                    
                        pricingGeneralPricingsubDetails211: "All features",
                        pricingGeneralPricingsubDetails212: "One license key",
                        pricingGeneralPricingsubDetails213: "Yearly subcription plan",
                        pricingGeneralPricingsubDetails214: "One year support & updates",
                        pricingGeneralPricingsubDetails215: "Per month ad-free: ₹99",
                        pricingGeneralPricingsubDetails216: "6 month subscription: ₹499",
                        pricingGeneralPricingsubDetails217: "12 month subscription: ₹999",
                
                pricingGeneralPricingta31: "2 cameras",
                pricingGeneralPricingta32: "popular",
                pricingGeneralPricingprice3: "199",
                pricingGeneralPricingpriceTag3: "with GST",
                pricingGeneralPricingpriceDis3: "Per member, per Month",
                    
                        pricingGeneralPricingsubDetails311: "Per month ad-free: ₹99",
                        pricingGeneralPricingsubDetails312: "6 month subscription: ₹499",
                        pricingGeneralPricingsubDetails313: "12 month subscription: ₹99",

                pricingGeneralPricingta4: "4 cameras",
                pricingGeneralPricingprice4: "299",
                pricingGeneralPricingpriceTag4: "with GST",
                pricingGeneralPricingpriceDis4: "Per member, per Month",
                    
                        pricingGeneralPricingsubDetails411: "All features",
                        pricingGeneralPricingsubDetails412: "One license key",
                        pricingGeneralPricingsubDetails413: "Yearly subcription plan",
                        pricingGeneralPricingsubDetails414: "One year support & update",
                        pricingGeneralPricingsubDetails415: "Per month ad-free: ₹99",
                        pricingGeneralPricingsubDetails416: "6 month subscription: ₹499",
                        pricingGeneralPricingsubDetails417: "12 month subscription: ₹999",
                    

                // login form
                loginBackBtn: "Go Back",
                loginH1: "Welcome back!",
                loginH3: "Nice to see you again",
                loginP: "YourSportz, the dynamic football app, offers a plethora ofhealth and lifestyle benefits. Let&rsquo;s delve into how it can enhance your well-being",
                loginH4: "Login",
                loginFormEmail: "Welcome back!",
                loginFormPassword: "Welcome back!",
                loginFormEmailPlaceholder: "Enter your Email",
                loginFormPasswordPlaceholder: "Password",
                loginFormKeep: "Keep me logged in",
                loginFormForgotPassword: "Forgot Password?",
                loginFormAgreeLeft: "I agree to the",
                loginFormAgreeRight: "Terms of Service and Privacy Policy",
                loginFormLoginLoading: "Loading...",
                loginFormLoginBtn: "Login",
                loginFormBottomP: "Don&apos;t have an account?",
                loginFormRegister: "Register",


                // register form
                registerBackBtn: "Go Back",
                registerH1: "Welcome back!",
                registerH4: "Nice to see you again",
                registerP: "YourSportz, the dynamic football app, offers a plethora ofhealth and lifestyle benefits. Let&rsquo;s delve into how it can enhance your well-being",
                registerToggleGeneral: "General",
                registerToggleSchool: "School / Corporate",
                registerFormName: "Full name",
                registerFormInstit: "Institution",
                registerFormComp: "Company",
                registerFormAdd: "Address",
                registerFormEmail: "Email",
                registerFormPassword: "Password",
                registerFormConfirmPassword: "Confirm Password",
                registerFormAgree: "I agree to the Terms of Service and Privacy Policy",
                registerFormLoading: "Loading...",
                registerFormRegister: "Register",
                registerFormAlready: "Already have an account?",
                registerFormLogin: "Login",


                // forgot password
                forgetPasswordH3: "Forget password",
                forgetPasswordP: "Enter The email address associated with your account.",
                forgetPasswordLoading: "Loading...",
                forgetPasswordSubmit: "Submit",
                forgetPasswordBack: "Back to login",

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
            

                // pricing page
                pricingH1: "Pick a plan that’s right for you",
                pricingP: "Pay as you go service, cancel anytime.",
                pricingH4: "Payment Methods",
                pricingbottomP: "We accept Visa, American Express, Mastercard, Paypal and Crypto",
                pricingToggelGeneral: "General",
                pricingToggelSchool: "School / Corporate",
                pricingBtn: "Choose",
                pricingSchoolPricingtag1: "6-Months",
                pricingSchoolPricingprice1: "25,000",
                pricingSchoolPricingpriceTag1: "With GST",
                pricingSchoolPricingpriceDis1: "Per member, per Year",
                    pricingSchoolPricingsubtitle11: "All features",
                        pricingSchoolPricingsubDetails111: "Membership Programs",
                        pricingSchoolPricingsubDetails112: "Group Discounts",
                    pricingSchoolPricingsubtitle12: "Includes 15 Free Live Matches",
                    pricingSchoolPricingsubtitle13: "Early Access to New Content",
                
                
                
                pricingSchoolPricingtag2: "per match live streamu",
                pricingSchoolPricingprice2: "15,000",
                pricingSchoolPricingpriceTag2: "with GST",
                    pricingSchoolPricingsubtitle21: "All features",
                        pricingSchoolPricingsubDetails211: "Membership Programs",
                        pricingSchoolPricingsubDetails212: "Exclusive Content",
                        pricingSchoolPricingsubDetails213: "Group Discounts",
                        pricingSchoolPricingsubDetails214: "Customizable Packages",
                    pricingSchoolPricingsubtitle22: "Includes 30 Free Live Matches",
                    pricingSchoolPricingsubtitle23: "Priority Support",


                pricingGeneralPricingprice1: "Free",
                    
                        pricingGeneralPricingsubDetails111: "Tourment creations",
                        pricingGeneralPricingsubDetails112: "Watch Score",
                        pricingGeneralPricingsubDetails113: "Start match",
                        pricingGeneralPricingsubDetails114: "Ad-Free Experience",


                pricingGeneralPricingtag2: "per match live stream",
                pricingGeneralPricingprice2: "149",
                pricingGeneralPricingpriceTag2: "with GST",
                    
                        pricingGeneralPricingsubDetails211: "All features",
                        pricingGeneralPricingsubDetails212: "One license key",
                        pricingGeneralPricingsubDetails213: "Yearly subcription plan",
                        pricingGeneralPricingsubDetails214: "One year support & updates",
                        pricingGeneralPricingsubDetails215: "Per month ad-free: ₹99",
                        pricingGeneralPricingsubDetails216: "6 month subscription: ₹499",
                        pricingGeneralPricingsubDetails217: "12 month subscription: ₹999",
                
                pricingGeneralPricingta31: "2 cameras",
                pricingGeneralPricingta32: "popular",
                pricingGeneralPricingprice3: "199",
                pricingGeneralPricingpriceTag3: "with GST",
                pricingGeneralPricingpriceDis3: "Per member, per Month",
                    
                        pricingGeneralPricingsubDetails311: "Per month ad-free: ₹99",
                        pricingGeneralPricingsubDetails312: "6 month subscription: ₹499",
                        pricingGeneralPricingsubDetails313: "12 month subscription: ₹99",

                pricingGeneralPricingta4: "4 cameras",
                pricingGeneralPricingprice4: "299",
                pricingGeneralPricingpriceTag4: "with GST",
                pricingGeneralPricingpriceDis4: "Per member, per Month",
                    
                        pricingGeneralPricingsubDetails411: "All features",
                        pricingGeneralPricingsubDetails412: "One license key",
                        pricingGeneralPricingsubDetails413: "Yearly subcription plan",
                        pricingGeneralPricingsubDetails414: "One year support & update",
                        pricingGeneralPricingsubDetails415: "Per month ad-free: ₹99",
                        pricingGeneralPricingsubDetails416: "6 month subscription: ₹499",
                        pricingGeneralPricingsubDetails417: "12 month subscription: ₹999",
                    

                // login form
                loginBackBtn: "Go Back",
                loginH1: "Welcome back!",
                loginH3: "Nice to see you again",
                loginP: "YourSportz, the dynamic football app, offers a plethora ofhealth and lifestyle benefits. Let&rsquo;s delve into how it can enhance your well-being",
                loginH4: "Login",
                loginFormEmail: "Welcome back!",
                loginFormPassword: "Welcome back!",
                loginFormEmailPlaceholder: "Enter your Email",
                loginFormPasswordPlaceholder: "Password",
                loginFormKeep: "Keep me logged in",
                loginFormForgotPassword: "Forgot Password?",
                loginFormAgreeLeft: "I agree to the",
                loginFormAgreeRight: "Terms of Service and Privacy Policy",
                loginFormLoginLoading: "Loading...",
                loginFormLoginBtn: "Login",
                loginFormBottomP: "Don&apos;t have an account?",
                loginFormRegister: "Register",


                // register form
                registerBackBtn: "Go Back",
                registerH1: "Welcome back!",
                registerH4: "Nice to see you again",
                registerP: "YourSportz, the dynamic football app, offers a plethora ofhealth and lifestyle benefits. Let&rsquo;s delve into how it can enhance your well-being",
                registerToggleGeneral: "General",
                registerToggleSchool: "School / Corporate",
                registerFormName: "Full name",
                registerFormInstit: "Institution",
                registerFormComp: "Company",
                registerFormAdd: "Address",
                registerFormEmail: "Email",
                registerFormPassword: "Password",
                registerFormConfirmPassword: "Confirm Password",
                registerFormAgree: "I agree to the Terms of Service and Privacy Policy",
                registerFormLoading: "Loading...",
                registerFormRegister: "Register",
                registerFormAlready: "Already have an account?",
                registerFormLogin: "Login",


                // forgot password
                forgetPasswordH3: "Forget password",
                forgetPasswordP: "Enter The email address associated with your account.",
                forgetPasswordLoading: "Loading...",
                forgetPasswordSubmit: "Submit",
                forgetPasswordBack: "Back to login",

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
            

                // pricing page
                pricingH1: "Pick a plan that’s right for you",
                pricingP: "Pay as you go service, cancel anytime.",
                pricingH4: "Payment Methods",
                pricingbottomP: "We accept Visa, American Express, Mastercard, Paypal and Crypto",
                pricingToggelGeneral: "General",
                pricingToggelSchool: "School / Corporate",
                pricingBtn: "Choose",
                pricingSchoolPricingtag1: "6-Months",
                pricingSchoolPricingprice1: "25,000",
                pricingSchoolPricingpriceTag1: "With GST",
                pricingSchoolPricingpriceDis1: "Per member, per Year",
                    pricingSchoolPricingsubtitle11: "All features",
                        pricingSchoolPricingsubDetails111: "Membership Programs",
                        pricingSchoolPricingsubDetails112: "Group Discounts",
                    pricingSchoolPricingsubtitle12: "Includes 15 Free Live Matches",
                    pricingSchoolPricingsubtitle13: "Early Access to New Content",
                
                
                
                pricingSchoolPricingtag2: "per match live streamu",
                pricingSchoolPricingprice2: "15,000",
                pricingSchoolPricingpriceTag2: "with GST",
                    pricingSchoolPricingsubtitle21: "All features",
                        pricingSchoolPricingsubDetails211: "Membership Programs",
                        pricingSchoolPricingsubDetails212: "Exclusive Content",
                        pricingSchoolPricingsubDetails213: "Group Discounts",
                        pricingSchoolPricingsubDetails214: "Customizable Packages",
                    pricingSchoolPricingsubtitle22: "Includes 30 Free Live Matches",
                    pricingSchoolPricingsubtitle23: "Priority Support",


                pricingGeneralPricingprice1: "Free",
                    
                        pricingGeneralPricingsubDetails111: "Tourment creations",
                        pricingGeneralPricingsubDetails112: "Watch Score",
                        pricingGeneralPricingsubDetails113: "Start match",
                        pricingGeneralPricingsubDetails114: "Ad-Free Experience",


                pricingGeneralPricingtag2: "per match live stream",
                pricingGeneralPricingprice2: "149",
                pricingGeneralPricingpriceTag2: "with GST",
                    
                        pricingGeneralPricingsubDetails211: "All features",
                        pricingGeneralPricingsubDetails212: "One license key",
                        pricingGeneralPricingsubDetails213: "Yearly subcription plan",
                        pricingGeneralPricingsubDetails214: "One year support & updates",
                        pricingGeneralPricingsubDetails215: "Per month ad-free: ₹99",
                        pricingGeneralPricingsubDetails216: "6 month subscription: ₹499",
                        pricingGeneralPricingsubDetails217: "12 month subscription: ₹999",
                
                pricingGeneralPricingta31: "2 cameras",
                pricingGeneralPricingta32: "popular",
                pricingGeneralPricingprice3: "199",
                pricingGeneralPricingpriceTag3: "with GST",
                pricingGeneralPricingpriceDis3: "Per member, per Month",
                    
                        pricingGeneralPricingsubDetails311: "Per month ad-free: ₹99",
                        pricingGeneralPricingsubDetails312: "6 month subscription: ₹499",
                        pricingGeneralPricingsubDetails313: "12 month subscription: ₹99",

                pricingGeneralPricingta4: "4 cameras",
                pricingGeneralPricingprice4: "299",
                pricingGeneralPricingpriceTag4: "with GST",
                pricingGeneralPricingpriceDis4: "Per member, per Month",
                    
                        pricingGeneralPricingsubDetails411: "All features",
                        pricingGeneralPricingsubDetails412: "One license key",
                        pricingGeneralPricingsubDetails413: "Yearly subcription plan",
                        pricingGeneralPricingsubDetails414: "One year support & update",
                        pricingGeneralPricingsubDetails415: "Per month ad-free: ₹99",
                        pricingGeneralPricingsubDetails416: "6 month subscription: ₹499",
                        pricingGeneralPricingsubDetails417: "12 month subscription: ₹999",
                    

                // login form
                loginBackBtn: "Go Back",
                loginH1: "Welcome back!",
                loginH3: "Nice to see you again",
                loginP: "YourSportz, the dynamic football app, offers a plethora ofhealth and lifestyle benefits. Let&rsquo;s delve into how it can enhance your well-being",
                loginH4: "Login",
                loginFormEmail: "Welcome back!",
                loginFormPassword: "Welcome back!",
                loginFormEmailPlaceholder: "Enter your Email",
                loginFormPasswordPlaceholder: "Password",
                loginFormKeep: "Keep me logged in",
                loginFormForgotPassword: "Forgot Password?",
                loginFormAgreeLeft: "I agree to the",
                loginFormAgreeRight: "Terms of Service and Privacy Policy",
                loginFormLoginLoading: "Loading...",
                loginFormLoginBtn: "Login",
                loginFormBottomP: "Don&apos;t have an account?",
                loginFormRegister: "Register",


                // register form
                registerBackBtn: "Go Back",
                registerH1: "Welcome back!",
                registerH4: "Nice to see you again",
                registerP: "YourSportz, the dynamic football app, offers a plethora ofhealth and lifestyle benefits. Let&rsquo;s delve into how it can enhance your well-being",
                registerToggleGeneral: "General",
                registerToggleSchool: "School / Corporate",
                registerFormName: "Full name",
                registerFormInstit: "Institution",
                registerFormComp: "Company",
                registerFormAdd: "Address",
                registerFormEmail: "Email",
                registerFormPassword: "Password",
                registerFormConfirmPassword: "Confirm Password",
                registerFormAgree: "I agree to the Terms of Service and Privacy Policy",
                registerFormLoading: "Loading...",
                registerFormRegister: "Register",
                registerFormAlready: "Already have an account?",
                registerFormLogin: "Login",


                // forgot password
                forgetPasswordH3: "Forget password",
                forgetPasswordP: "Enter The email address associated with your account.",
                forgetPasswordLoading: "Loading...",
                forgetPasswordSubmit: "Submit",
                forgetPasswordBack: "Back to login",


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
            

                // pricing page
                pricingH1: "Pick a plan that’s right for you",
                pricingP: "Pay as you go service, cancel anytime.",
                pricingH4: "Payment Methods",
                pricingbottomP: "We accept Visa, American Express, Mastercard, Paypal and Crypto",
                pricingToggelGeneral: "General",
                pricingToggelSchool: "School / Corporate",
                pricingBtn: "Choose",
                pricingSchoolPricingtag1: "6-Months",
                pricingSchoolPricingprice1: "25,000",
                pricingSchoolPricingpriceTag1: "With GST",
                pricingSchoolPricingpriceDis1: "Per member, per Year",
                    pricingSchoolPricingsubtitle11: "All features",
                        pricingSchoolPricingsubDetails111: "Membership Programs",
                        pricingSchoolPricingsubDetails112: "Group Discounts",
                    pricingSchoolPricingsubtitle12: "Includes 15 Free Live Matches",
                    pricingSchoolPricingsubtitle13: "Early Access to New Content",
                
                
                
                pricingSchoolPricingtag2: "per match live streamu",
                pricingSchoolPricingprice2: "15,000",
                pricingSchoolPricingpriceTag2: "with GST",
                    pricingSchoolPricingsubtitle21: "All features",
                        pricingSchoolPricingsubDetails211: "Membership Programs",
                        pricingSchoolPricingsubDetails212: "Exclusive Content",
                        pricingSchoolPricingsubDetails213: "Group Discounts",
                        pricingSchoolPricingsubDetails214: "Customizable Packages",
                    pricingSchoolPricingsubtitle22: "Includes 30 Free Live Matches",
                    pricingSchoolPricingsubtitle23: "Priority Support",


                pricingGeneralPricingprice1: "Free",
                    
                        pricingGeneralPricingsubDetails111: "Tourment creations",
                        pricingGeneralPricingsubDetails112: "Watch Score",
                        pricingGeneralPricingsubDetails113: "Start match",
                        pricingGeneralPricingsubDetails114: "Ad-Free Experience",


                pricingGeneralPricingtag2: "per match live stream",
                pricingGeneralPricingprice2: "149",
                pricingGeneralPricingpriceTag2: "with GST",
                    
                        pricingGeneralPricingsubDetails211: "All features",
                        pricingGeneralPricingsubDetails212: "One license key",
                        pricingGeneralPricingsubDetails213: "Yearly subcription plan",
                        pricingGeneralPricingsubDetails214: "One year support & updates",
                        pricingGeneralPricingsubDetails215: "Per month ad-free: ₹99",
                        pricingGeneralPricingsubDetails216: "6 month subscription: ₹499",
                        pricingGeneralPricingsubDetails217: "12 month subscription: ₹999",
                
                pricingGeneralPricingta31: "2 cameras",
                pricingGeneralPricingta32: "popular",
                pricingGeneralPricingprice3: "199",
                pricingGeneralPricingpriceTag3: "with GST",
                pricingGeneralPricingpriceDis3: "Per member, per Month",
                    
                        pricingGeneralPricingsubDetails311: "Per month ad-free: ₹99",
                        pricingGeneralPricingsubDetails312: "6 month subscription: ₹499",
                        pricingGeneralPricingsubDetails313: "12 month subscription: ₹99",

                pricingGeneralPricingta4: "4 cameras",
                pricingGeneralPricingprice4: "299",
                pricingGeneralPricingpriceTag4: "with GST",
                pricingGeneralPricingpriceDis4: "Per member, per Month",
                    
                        pricingGeneralPricingsubDetails411: "All features",
                        pricingGeneralPricingsubDetails412: "One license key",
                        pricingGeneralPricingsubDetails413: "Yearly subcription plan",
                        pricingGeneralPricingsubDetails414: "One year support & update",
                        pricingGeneralPricingsubDetails415: "Per month ad-free: ₹99",
                        pricingGeneralPricingsubDetails416: "6 month subscription: ₹499",
                        pricingGeneralPricingsubDetails417: "12 month subscription: ₹999",
                    

                // login form
                loginBackBtn: "Go Back",
                loginH1: "Welcome back!",
                loginH3: "Nice to see you again",
                loginP: "YourSportz, the dynamic football app, offers a plethora ofhealth and lifestyle benefits. Let&rsquo;s delve into how it can enhance your well-being",
                loginH4: "Login",
                loginFormEmail: "Welcome back!",
                loginFormPassword: "Welcome back!",
                loginFormEmailPlaceholder: "Enter your Email",
                loginFormPasswordPlaceholder: "Password",
                loginFormKeep: "Keep me logged in",
                loginFormForgotPassword: "Forgot Password?",
                loginFormAgreeLeft: "I agree to the",
                loginFormAgreeRight: "Terms of Service and Privacy Policy",
                loginFormLoginLoading: "Loading...",
                loginFormLoginBtn: "Login",
                loginFormBottomP: "Don&apos;t have an account?",
                loginFormRegister: "Register",


                // register form
                registerBackBtn: "Go Back",
                registerH1: "Welcome back!",
                registerH4: "Nice to see you again",
                registerP: "YourSportz, the dynamic football app, offers a plethora ofhealth and lifestyle benefits. Let&rsquo;s delve into how it can enhance your well-being",
                registerToggleGeneral: "General",
                registerToggleSchool: "School / Corporate",
                registerFormName: "Full name",
                registerFormInstit: "Institution",
                registerFormComp: "Company",
                registerFormAdd: "Address",
                registerFormEmail: "Email",
                registerFormPassword: "Password",
                registerFormConfirmPassword: "Confirm Password",
                registerFormAgree: "I agree to the Terms of Service and Privacy Policy",
                registerFormLoading: "Loading...",
                registerFormRegister: "Register",
                registerFormAlready: "Already have an account?",
                registerFormLogin: "Login",


                // forgot password
                forgetPasswordH3: "Forget password",
                forgetPasswordP: "Enter The email address associated with your account.",
                forgetPasswordLoading: "Loading...",
                forgetPasswordSubmit: "Submit",
                forgetPasswordBack: "Back to login",

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
            

                // pricing page
                pricingH1: "Pick a plan that’s right for you",
                pricingP: "Pay as you go service, cancel anytime.",
                pricingH4: "Payment Methods",
                pricingbottomP: "We accept Visa, American Express, Mastercard, Paypal and Crypto",
                pricingToggelGeneral: "General",
                pricingToggelSchool: "School / Corporate",
                pricingBtn: "Choose",
                pricingSchoolPricingtag1: "6-Months",
                pricingSchoolPricingprice1: "25,000",
                pricingSchoolPricingpriceTag1: "With GST",
                pricingSchoolPricingpriceDis1: "Per member, per Year",
                    pricingSchoolPricingsubtitle11: "All features",
                        pricingSchoolPricingsubDetails111: "Membership Programs",
                        pricingSchoolPricingsubDetails112: "Group Discounts",
                    pricingSchoolPricingsubtitle12: "Includes 15 Free Live Matches",
                    pricingSchoolPricingsubtitle13: "Early Access to New Content",
                
                
                
                pricingSchoolPricingtag2: "per match live streamu",
                pricingSchoolPricingprice2: "15,000",
                pricingSchoolPricingpriceTag2: "with GST",
                    pricingSchoolPricingsubtitle21: "All features",
                        pricingSchoolPricingsubDetails211: "Membership Programs",
                        pricingSchoolPricingsubDetails212: "Exclusive Content",
                        pricingSchoolPricingsubDetails213: "Group Discounts",
                        pricingSchoolPricingsubDetails214: "Customizable Packages",
                    pricingSchoolPricingsubtitle22: "Includes 30 Free Live Matches",
                    pricingSchoolPricingsubtitle23: "Priority Support",


                pricingGeneralPricingprice1: "Free",
                    
                        pricingGeneralPricingsubDetails111: "Tourment creations",
                        pricingGeneralPricingsubDetails112: "Watch Score",
                        pricingGeneralPricingsubDetails113: "Start match",
                        pricingGeneralPricingsubDetails114: "Ad-Free Experience",


                pricingGeneralPricingtag2: "per match live stream",
                pricingGeneralPricingprice2: "149",
                pricingGeneralPricingpriceTag2: "with GST",
                    
                        pricingGeneralPricingsubDetails211: "All features",
                        pricingGeneralPricingsubDetails212: "One license key",
                        pricingGeneralPricingsubDetails213: "Yearly subcription plan",
                        pricingGeneralPricingsubDetails214: "One year support & updates",
                        pricingGeneralPricingsubDetails215: "Per month ad-free: ₹99",
                        pricingGeneralPricingsubDetails216: "6 month subscription: ₹499",
                        pricingGeneralPricingsubDetails217: "12 month subscription: ₹999",
                
                pricingGeneralPricingta31: "2 cameras",
                pricingGeneralPricingta32: "popular",
                pricingGeneralPricingprice3: "199",
                pricingGeneralPricingpriceTag3: "with GST",
                pricingGeneralPricingpriceDis3: "Per member, per Month",
                    
                        pricingGeneralPricingsubDetails311: "Per month ad-free: ₹99",
                        pricingGeneralPricingsubDetails312: "6 month subscription: ₹499",
                        pricingGeneralPricingsubDetails313: "12 month subscription: ₹99",

                pricingGeneralPricingta4: "4 cameras",
                pricingGeneralPricingprice4: "299",
                pricingGeneralPricingpriceTag4: "with GST",
                pricingGeneralPricingpriceDis4: "Per member, per Month",
                    
                        pricingGeneralPricingsubDetails411: "All features",
                        pricingGeneralPricingsubDetails412: "One license key",
                        pricingGeneralPricingsubDetails413: "Yearly subcription plan",
                        pricingGeneralPricingsubDetails414: "One year support & update",
                        pricingGeneralPricingsubDetails415: "Per month ad-free: ₹99",
                        pricingGeneralPricingsubDetails416: "6 month subscription: ₹499",
                        pricingGeneralPricingsubDetails417: "12 month subscription: ₹999",
                    

                // login form
                loginBackBtn: "Go Back",
                loginH1: "Welcome back!",
                loginH3: "Nice to see you again",
                loginP: "YourSportz, the dynamic football app, offers a plethora ofhealth and lifestyle benefits. Let&rsquo;s delve into how it can enhance your well-being",
                loginH4: "Login",
                loginFormEmail: "Welcome back!",
                loginFormPassword: "Welcome back!",
                loginFormEmailPlaceholder: "Enter your Email",
                loginFormPasswordPlaceholder: "Password",
                loginFormKeep: "Keep me logged in",
                loginFormForgotPassword: "Forgot Password?",
                loginFormAgreeLeft: "I agree to the",
                loginFormAgreeRight: "Terms of Service and Privacy Policy",
                loginFormLoginLoading: "Loading...",
                loginFormLoginBtn: "Login",
                loginFormBottomP: "Don&apos;t have an account?",
                loginFormRegister: "Register",


                // register form
                registerBackBtn: "Go Back",
                registerH1: "Welcome back!",
                registerH4: "Nice to see you again",
                registerP: "YourSportz, the dynamic football app, offers a plethora ofhealth and lifestyle benefits. Let&rsquo;s delve into how it can enhance your well-being",
                registerToggleGeneral: "General",
                registerToggleSchool: "School / Corporate",
                registerFormName: "Full name",
                registerFormInstit: "Institution",
                registerFormComp: "Company",
                registerFormAdd: "Address",
                registerFormEmail: "Email",
                registerFormPassword: "Password",
                registerFormConfirmPassword: "Confirm Password",
                registerFormAgree: "I agree to the Terms of Service and Privacy Policy",
                registerFormLoading: "Loading...",
                registerFormRegister: "Register",
                registerFormAlready: "Already have an account?",
                registerFormLogin: "Login",


                // forgot password
                forgetPasswordH3: "Forget password",
                forgetPasswordP: "Enter The email address associated with your account.",
                forgetPasswordLoading: "Loading...",
                forgetPasswordSubmit: "Submit",
                forgetPasswordBack: "Back to login",
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
            

                // pricing page
                pricingH1: "Pick a plan that’s right for you",
                pricingP: "Pay as you go service, cancel anytime.",
                pricingH4: "Payment Methods",
                pricingbottomP: "We accept Visa, American Express, Mastercard, Paypal and Crypto",
                pricingToggelGeneral: "General",
                pricingToggelSchool: "School / Corporate",
                pricingBtn: "Choose",
                pricingSchoolPricingtag1: "6-Months",
                pricingSchoolPricingprice1: "25,000",
                pricingSchoolPricingpriceTag1: "With GST",
                pricingSchoolPricingpriceDis1: "Per member, per Year",
                    pricingSchoolPricingsubtitle11: "All features",
                        pricingSchoolPricingsubDetails111: "Membership Programs",
                        pricingSchoolPricingsubDetails112: "Group Discounts",
                    pricingSchoolPricingsubtitle12: "Includes 15 Free Live Matches",
                    pricingSchoolPricingsubtitle13: "Early Access to New Content",
                
                
                
                pricingSchoolPricingtag2: "per match live streamu",
                pricingSchoolPricingprice2: "15,000",
                pricingSchoolPricingpriceTag2: "with GST",
                    pricingSchoolPricingsubtitle21: "All features",
                        pricingSchoolPricingsubDetails211: "Membership Programs",
                        pricingSchoolPricingsubDetails212: "Exclusive Content",
                        pricingSchoolPricingsubDetails213: "Group Discounts",
                        pricingSchoolPricingsubDetails214: "Customizable Packages",
                    pricingSchoolPricingsubtitle22: "Includes 30 Free Live Matches",
                    pricingSchoolPricingsubtitle23: "Priority Support",


                pricingGeneralPricingprice1: "Free",
                    
                        pricingGeneralPricingsubDetails111: "Tourment creations",
                        pricingGeneralPricingsubDetails112: "Watch Score",
                        pricingGeneralPricingsubDetails113: "Start match",
                        pricingGeneralPricingsubDetails114: "Ad-Free Experience",


                pricingGeneralPricingtag2: "per match live stream",
                pricingGeneralPricingprice2: "149",
                pricingGeneralPricingpriceTag2: "with GST",
                    
                        pricingGeneralPricingsubDetails211: "All features",
                        pricingGeneralPricingsubDetails212: "One license key",
                        pricingGeneralPricingsubDetails213: "Yearly subcription plan",
                        pricingGeneralPricingsubDetails214: "One year support & updates",
                        pricingGeneralPricingsubDetails215: "Per month ad-free: ₹99",
                        pricingGeneralPricingsubDetails216: "6 month subscription: ₹499",
                        pricingGeneralPricingsubDetails217: "12 month subscription: ₹999",
                
                pricingGeneralPricingta31: "2 cameras",
                pricingGeneralPricingta32: "popular",
                pricingGeneralPricingprice3: "199",
                pricingGeneralPricingpriceTag3: "with GST",
                pricingGeneralPricingpriceDis3: "Per member, per Month",
                    
                        pricingGeneralPricingsubDetails311: "Per month ad-free: ₹99",
                        pricingGeneralPricingsubDetails312: "6 month subscription: ₹499",
                        pricingGeneralPricingsubDetails313: "12 month subscription: ₹99",

                pricingGeneralPricingta4: "4 cameras",
                pricingGeneralPricingprice4: "299",
                pricingGeneralPricingpriceTag4: "with GST",
                pricingGeneralPricingpriceDis4: "Per member, per Month",
                    
                        pricingGeneralPricingsubDetails411: "All features",
                        pricingGeneralPricingsubDetails412: "One license key",
                        pricingGeneralPricingsubDetails413: "Yearly subcription plan",
                        pricingGeneralPricingsubDetails414: "One year support & update",
                        pricingGeneralPricingsubDetails415: "Per month ad-free: ₹99",
                        pricingGeneralPricingsubDetails416: "6 month subscription: ₹499",
                        pricingGeneralPricingsubDetails417: "12 month subscription: ₹999",
                    

                // login form
                loginBackBtn: "Go Back",
                loginH1: "Welcome back!",
                loginH3: "Nice to see you again",
                loginP: "YourSportz, the dynamic football app, offers a plethora ofhealth and lifestyle benefits. Let&rsquo;s delve into how it can enhance your well-being",
                loginH4: "Login",
                loginFormEmail: "Welcome back!",
                loginFormPassword: "Welcome back!",
                loginFormEmailPlaceholder: "Enter your Email",
                loginFormPasswordPlaceholder: "Password",
                loginFormKeep: "Keep me logged in",
                loginFormForgotPassword: "Forgot Password?",
                loginFormAgreeLeft: "I agree to the",
                loginFormAgreeRight: "Terms of Service and Privacy Policy",
                loginFormLoginLoading: "Loading...",
                loginFormLoginBtn: "Login",
                loginFormBottomP: "Don&apos;t have an account?",
                loginFormRegister: "Register",


                // register form
                registerBackBtn: "Go Back",
                registerH1: "Welcome back!",
                registerH4: "Nice to see you again",
                registerP: "YourSportz, the dynamic football app, offers a plethora ofhealth and lifestyle benefits. Let&rsquo;s delve into how it can enhance your well-being",
                registerToggleGeneral: "General",
                registerToggleSchool: "School / Corporate",
                registerFormName: "Full name",
                registerFormInstit: "Institution",
                registerFormComp: "Company",
                registerFormAdd: "Address",
                registerFormEmail: "Email",
                registerFormPassword: "Password",
                registerFormConfirmPassword: "Confirm Password",
                registerFormAgree: "I agree to the Terms of Service and Privacy Policy",
                registerFormLoading: "Loading...",
                registerFormRegister: "Register",
                registerFormAlready: "Already have an account?",
                registerFormLogin: "Login",


                // forgot password
                forgetPasswordH3: "Forget password",
                forgetPasswordP: "Enter The email address associated with your account.",
                forgetPasswordLoading: "Loading...",
                forgetPasswordSubmit: "Submit",
                forgetPasswordBack: "Back to login",
            }
        },
    }
})