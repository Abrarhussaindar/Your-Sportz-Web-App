import i18n from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"

i18n.use(LanguageDetector).use(initReactI18next).init({
    debug: false,
    fallbackLng: "en",
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
                    socialLi3: " Facebook",
                    socialLi4: " LinkedIn",
                    socialLi5: " Youtube",
                    
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
                contactUsH3: "### We're Here to Help!",
                contactUsP: "**Got a question?** We love hearing from you! Whether you have a query about our services, need assistance, or you're crafting the next big idea and need some advice, our team is all ears.",
                
                formHeaderP: "Just fill out the form below, and we'll get back to you with lightning speed.",

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
                pricingSchoolPricingprice1: 25000,
                pricingSchoolPricingpriceTag1: "With GST",
                pricingSchoolPricingpriceDis1: "Per member, per Year",
                    pricingSchoolPricingsubtitle11: "All features",
                        pricingSchoolPricingsubDetails111: "Membership Programs",
                        pricingSchoolPricingsubDetails112: "Group Discounts",
                    pricingSchoolPricingsubtitle12: "Includes 15 Free Live Matches",
                    pricingSchoolPricingsubtitle13: "Early Access to New Content",
                
                
                
                pricingSchoolPricingtag2: "per match live streamu",
                pricingSchoolPricingprice2: 15000,
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
                pricingGeneralPricingprice2: 149,
                pricingGeneralPricingpriceTag2: "with GST",
                    
                        pricingGeneralPricingsubDetails211: "All features",
                        pricingGeneralPricingsubDetails212: "One license key",
                        pricingGeneralPricingsubDetails213: "Yearly subcription plan",
                        pricingGeneralPricingsubDetails214: "One year support & updates",
                        pricingGeneralPricingsubDetails215: "Per month ad-free: ₹99",
                        pricingGeneralPricingsubDetails216: "6 month subscription: ₹499",
                        pricingGeneralPricingsubDetails217: "12 month subscription: ₹999",
                
                pricingGeneralPricingtag31: "2 cameras",
                pricingGeneralPricingta32: "popular",
                pricingGeneralPricingprice3: 199,
                pricingGeneralPricingpriceTag3: "with GST",
                pricingGeneralPricingpriceDis3: "Per member, per Month",
                    
                        pricingGeneralPricingsubDetails311: "Per month ad-free: ₹99",
                        pricingGeneralPricingsubDetails312: "6 month subscription: ₹499",
                        pricingGeneralPricingsubDetails313: "12 month subscription: ₹99",

                pricingGeneralPricingtag4: "4 cameras",
                pricingGeneralPricingprice4: 299,
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
                loginP: "YourSportz, the dynamic football app, offers a plethora of health and lifestyle benefits. Let&rsquo;s delve into how it can enhance your well-being",
                loginH4: "Login",
                loginFormEmail: "Email",
                loginFormPassword: "Password",
                loginFormEmailPlaceholder: "Enter your Email",
                loginFormPasswordPlaceholder: "Password",
                loginFormKeep: "Keep me logged in",
                loginFormForgotPassword: "Forgot Password?",
                loginFormAgreeLeft: "I agree to the",
                loginFormAgreeRight: "Terms of Service and Privacy Policy",
                loginFormLoginLoading: "Loading...",
                loginFormLoginBtn: "Login",
                loginFormBottomP: "Don't have an account?",
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
                
                // Early Access page
                earlyAccessH2SpamLeft: "Your",
                earlyAccessH2SpamRight: "Sportz",
                earlyAccessH1: "Excited for early access! Get a sneak peek before launch, explore features, and shape our platforms future.",
                earlyAccessH2: "Join the waitlist now to get the early access",
                earlyAccessButton: "REQUEST ACCESS",
                earlyAccessInputField: "Enter Your Phone Number",
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
                desciption2: "हर खेल से अपडेट रहें। हमारी लाइव कमेंटरी सुविधा आपको मिनट-दर-मिनट अपडेट से अवगत रखती है। प्रमुख नाटकों से लेकर निर्णायक निर्णयों तक, कार्रवाई का एक भी क्षण न चूकें।",
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
                    socialLi2: " इंस्टाग्राम",
                    socialLi3: " फेसबुक",
                    socialLi4: " लिंक्डइन",
                    socialLi5: " यूट्यूब",
                needH2: "मदद की ज़रूरत है",
                    needLi1: "संपर्क करें",
                    needLi2: "मूल्य निर्धारण",
                    needLi3: "सामान्य प्रश्न",
                legalH2: "कानूनी",
                    legalLi1: "उपयोग की शर्तें",
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
                
                pricingGeneralPricingtag31: "2 कैमरे",
                pricingGeneralPricingta32: "लोकप्रिय",
                pricingGeneralPricingprice3: "199",
                pricingGeneralPricingpriceTag3: "जीएसटी के साथ",
                pricingGeneralPricingpriceDis3: "प्रति सदस्य, प्रति माह",
                    
                        pricingGeneralPricingsubDetails311: "प्रति माह विज्ञापन-मुक्त: ₹99",
                        pricingGeneralPricingsubDetails312: "6 महीने की सदस्यता: ₹499",
                        pricingGeneralPricingsubDetails313: "12 महीने की सदस्यता: ₹99",

                pricingGeneralPricingtag4: "4 कैमरे",
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
                
                
                // Early Access page
                earlyAccessH2SpamLeft: "आपका",
                earlyAccessH2SpamRight: "स्पोर्ट्ज़",
                earlyAccessH1: "शीघ्र पहुंच के लिए उत्साहित! लॉन्च से पहले एक झलक देखें, सुविधाओं का पता लगाएं और हमारे प्लेटफ़ॉर्म के भविष्य को आकार दें।",
                earlyAccessH2: "शीघ्र पहुंच पाने के लिए अभी प्रतीक्षा सूची में शामिल हों",
                earlyAccessButton: "अनुरोध का उपयोग",
                earlyAccessInputField: "अपना फोन नंबर डालें",
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
                question1: "ما هي يورسبورت؟",
                answer1: "YourSportz هو تطبيق كرة قدم شامل، يتيح بث المباريات بدقة عالية، والتسجيل المباشر، وتتبع الأداء. تواصل مع الألعاب والبطولات المحلية، وتابع أفضل اللاعبين - كل ذلك في منصة ديناميكية واحدة.",

                // id 2
                question2: "هل YourSportz هو تطبيق رياضي أو مراهنة خيالي؟",
                answer2: "YourSportz هو تطبيق كرة قدم شامل، يتيح بث المباريات بدقة عالية، والتسجيل المباشر، وتتبع الأداء. تواصل مع الألعاب والبطولات المحلية، وتابع أفضل اللاعبين - كل ذلك في منصة ديناميكية واحدة.",

                // id 3
                question3: "هل يمكنني متابعة فرق أو لاعبين كرة قدم محليين محددين على YourSportz؟",
                answer3: "YourSportz هو تطبيق كرة قدم شامل، يتيح بث المباريات بدقة عالية، والتسجيل المباشر، وتتبع الأداء. تواصل مع الألعاب والبطولات المحلية، وتابع أفضل اللاعبين - كل ذلك في منصة ديناميكية واحدة.",

                // id 4
                question4: "هل البث المباشر متاح لمباريات كرة القدم المحلية على YourSportz?",
                answer4: "YourSportz هو تطبيق كرة قدم شامل، يتيح بث المباريات بدقة عالية، والتسجيل المباشر، وتتبع الأداء. تواصل مع الألعاب والبطولات المحلية، وتابع أفضل اللاعبين - كل ذلك في منصة ديناميكية واحدة.",

                // id 5
                question5: "ما هي الميزات التي يقدمها YourSportz؟",
                answer5: "YourSportz هو تطبيق كرة قدم شامل، يتيح بث المباريات بدقة عالية، والتسجيل المباشر، وتتبع الأداء. تواصل مع الألعاب والبطولات المحلية، وتابع أفضل اللاعبين - كل ذلك في منصة ديناميكية واحدة.",


                // footer section
                socialH2: "اجتماعي",
                    socialLi1: " بريد إلكتروني",
                    socialLi2: " انستغرام",
                    socialLi3: " فيسبوك",
                    socialLi4: " ينكدين",
                    socialLi5: " يوتيوب",
                needH2: "تحتاج مساعدة",
                    needLi1: "اتصل بنا",
                    needLi2: "التسعير",
                    needLi3: "التعليمات",
                legalH2: "قانوني",
                    legalLi1: "شروط الاستخدام",
                    legalLi2: "سياسة الخصوصية",

                copyright: "yoursportz بواسطة Navrekh Technologies PVT LTD",


                // about us page
                aboutusRightH3: "رؤيتنا",
                aboutusRightP: "تمكين الرياضيين المتحمسين، تتصور YourSportz عالمًا يستطيع فيه كل عشاق الرياضة، بغض النظر عن التخصص الذي اختاروه، متابعة شغفهم بتفان لا يتزعزع. نحن نؤمن بأن الرياضة تتجاوز الحدود والثقافات والخلفيات، وتوحد الناس من خلال الخبرات والإنجازات المشتركة.",
                aboutusLeftH3: "هدفنا",
                aboutusLeftP: "إطلاق العنان للإمكانات الرياضية هدفنا هو إنشاء منصة رياضية شاملة تلبي احتياجات الأفراد عبر مختلف الألعاب الرياضية والألعاب. وإليك كيف نخطط لتحقيق ذلك:",
                
                
                aboutuslipspan1: "التكامل متعدد الرياضات:",
                aboutuslip1: "سوف تقوم YourSportz بدمج العديد من الرياضات والألعاب بسلاسة، مما يوفر مركزًا موحدًا لعشاقها. يمكن للمستخدمين التبديل بين تتبع تسديدات كرة السلة، وأهداف كرة القدم، وإرسالات التنس، والمزيد - كل ذلك من خلال تطبيق واحد.",
                aboutuslipspan2: "تجربة شخصية:",
                aboutuslip2: "نحن ندرك أن رحلة كل رياضي فريدة من نوعها. سوف تقوم YourSportz بتخصيص ميزاتها لتلبية التفضيلات الفردية. ستعمل لوحات المعلومات المخصصة وخطط التدريب وتحليلات الأداء على تمكين المستخدمين من تحديد أهدافهم وتحقيقها.",
                aboutuslipspan3: "إحصائيات شاملة:",
                aboutuslip3: "سيكون YourSportz بمثابة كنز من الإحصائيات. يمكن للمستخدمين تتبع مقاييس أدائهم، بما في ذلك النقاط المسجلة والمسافة المقطوعة والسرعة والدقة والمزيد. سواء كنت محاربًا في عطلة نهاية الأسبوع أو رياضيًا محترفًا، سيوفر تطبيقنا رؤى قيمة لتحسين لعبتك.",
                aboutuslipspan4: "المجتمع والتحديات: ",
                aboutuslip4: "إن التواصل بين الرياضيين هو في قلب YourSportz. يمكن للمستخدمين الانضمام إلى المجتمعات ومشاركة إنجازاتهم والمشاركة في التحديات. ستعمل المسابقات الودية ولوحات المتصدرين والأحداث الافتراضية على تعزيز الصداقة الحميمة والمنافسة الصحية.",
                aboutuslipspan5: "التحفيز والمكافآت:",
                aboutuslip5: "نحن نؤمن بالاحتفال بالتقدم. سوف يقوم Yoursportz بتحفيز المستخدمين من خلال الإنجازات والشارات والمعالم. سواء كان الأمر يتعلق بتحقيق أفضل مستوى شخصي أو إكمال تحدي اللياقة البدنية، فإن تطبيقنا سوف يقدّر التفاني ويكافئه.",
                aboutuslipspan6: "يمكن الوصول إليها وشاملة: ",
                aboutuslip6: "يهدف Yoursportz إلى أن يكون في متناول الجميع. سنضمن التوافق مع مختلف الأجهزة وأنظمة التشغيل ومستويات المهارة. دعم اللغة والواجهات التكيفية والقدرة على تحمل التكاليف سيجعل من Yoursportz رفيقًا رياضيًا عالميًا.",
            
            
                // contact us page
                contactUsH3: "### نحن هنا للمساعدة!",
                contactUsP: "**هل لديك سؤال؟** نحن نحب أن نسمع منك! سواء كان لديك استفسار حول خدماتنا، أو كنت بحاجة إلى المساعدة، أو كنت تقوم بصياغة الفكرة الكبيرة التالية وتحتاج إلى بعض النصائح، فإن فريقنا يستمع إليك.",
                
                formHeaderP: "ما عليك سوى ملء النموذج أدناه، وسنقوم بالرد عليك بسرعة البرق.",

                formName: "الاسم الكامل",
                formPhone: "رقم التليفون",
                formEmail: "عنوان الايميل",
                formSub: "موضوع",
                formMsg: "رسالة",
                formTypeMsg: "اكتب رسالتك",
                formSubmitBtn: "يُقدِّم",


                // terms and conditons page
                termsH1: "الأحكام والشروط",

                termsTitle1: "الأحكام والشروط",
                    termsContent11: "يحظر تطبيق YourSportz محتوى العري أو العنف أو المواد الإباحية؛ سيتم حظر المخالفين.",
                    termsContent12: "يتحمل المستخدمون وحدهم المسؤولية عن المحتوى المنشور؛ تحتفظ YourSportz بالحق في إزالة المحتوى غير المناسب.",
                    termsContent13: "YourSportz ليست مسؤولة عن المشكلات الفنية؛ ستتم محاولة الحل السريع.",
                    termsContent14: "الشروط قابلة للتغيير. سيتم إخطار المستخدمين بالتحديثات.",
                termsTitle2: "سياسة ملفات الارتباط:",
                    termsContent21: "تعمل ملفات تعريف الارتباط على تحسين تجربة المستخدم من خلال تذكر التفضيلات.",
                    termsContent22: "تشمل الأنواع ملفات تعريف الارتباط الأساسية والتحليلية والإعلانية.",
                    termsContent23: "يمكن للمستخدمين إدارة ملفات تعريف الارتباط في إعدادات التطبيق؛ قد يؤثر التعطيل على الوظيفة.",
                termsTitle3: "سياسة الخصوصية:",
                    termsContent31: "تقوم YourSportz بجمع البيانات الشخصية وبيانات الاستخدام لوظائف التطبيق والتحليلات.",
                    termsContent32: "يتم تنفيذ تدابير أمن البيانات؛ تنطبق سياسات الخصوصية الخاصة بخدمات الطرف الثالث.",
                    termsContent33: "قد تحدث تحديثات السياسة بشكل دوري؛ تحقق من أحدث إصدار في التطبيق.",
                termsTitle4: "سياسة الخصوصية واسترداد الأموال:",
                    termsContent41: "يتم جمع بيانات المستخدم للإحصائيات والرؤى، ويتم تأمينها بالتشفير، والاحتفاظ بها عند الضرورة.",
                    termsContent42: "يوافق المستخدمون على جمع البيانات واستخدامها والاحتفاظ بها باستخدام التطبيق.",
                    termsContent43: "لا يتم إصدار المبالغ المستردة للمعاملات المدفوعة مسبقًا ما لم تكن الخدمات معيبة أو مطلوبة بموجب القانون.",
                termsTitle5: "سياسة استرداد الأموال لتطبيق YourSportz:",
                    termsContent51: "المعاملات المدفوعة مسبقًا غير قابلة للاسترداد بمجرد الاستفادة من الخدمات.",
                    termsContent52: "يمكن اعتبار المبالغ المستردة مقابل الخدمات المعيبة خلال 7 أيام من الاستخدام.",
                    termsContent53: "قد تتطلب الالتزامات القانونية استرداد الأموال وفقًا للقوانين أو اللوائح المعمول بها",

                termLeftP: "للحصول على أي مساعدة، اتصل بخدمة العملاء لدينا @ yoursportz.in.",
                termLeftH4: "شكرا لاختيارك يور سبورتز!", 
            

                // privacy policy page
                privacyH1: "سياسة الخصوصية",

                privacyTitle1: "سياسة ملفات الارتباط:",
                    privacyContent11: "تعمل ملفات تعريف الارتباط على تحسين تجربة المستخدم من خلال تذكر التفضيلات",
                    privacyContent12: "تشمل الأنواع ملفات تعريف الارتباط الأساسية والتحليلية والإعلانية.",
                    privacyContent13: "يمكن للمستخدمين إدارة ملفات تعريف الارتباط في إعدادات التطبيق؛ قد يؤثر التعطيل على الوظيفة.",
                privacyTitle2: "سياسة الخصوصية:",
                    privacyContent21: "تقوم YourSportz بجمع البيانات الشخصية وبيانات الاستخدام لوظائف التطبيق والتحليلات.",
                    privacyContent22: "يتم تنفيذ تدابير أمن البيانات؛ تنطبق سياسات الخصوصية الخاصة بخدمات الطرف الثالث.",
                    privacyContent23: "قد تحدث تحديثات السياسة بشكل دوري؛ تحقق من أحدث إصدار في التطبيق.",
                privacyTitle3: "سياسة الخصوصية واسترداد الأموال:",
                    privacyContent31: "يتم جمع بيانات المستخدم للإحصائيات والرؤى، ويتم تأمينها بالتشفير، والاحتفاظ بها عند الضرورة.",
                    privacyContent32: "يوافق المستخدمون على جمع البيانات واستخدامها والاحتفاظ بها باستخدام التطبيق.",
                    privacyContent33: "لا يتم إصدار المبالغ المستردة للمعاملات المدفوعة مسبقًا ما لم تكن الخدمات معيبة أو مطلوبة بموجب القانون.",

                privacyLeftP: "للحصول على أي مساعدة، اتصل بخدمة العملاء لدينا @ yoursportz.in.",
                privacyLeftH4: "شكرا لاختيارك يور سبورتز!", 
            

                // pricing page
                pricingH1: "اختر الخطة المناسبة لك",
                pricingP: "خدمة الدفع الفوري، قم بالإلغاء في أي وقت.",
                pricingH4: "طرق الدفع",
                pricingbottomP: "نحن نقبل Visa وAmerican Express وMastercard وPaypal وCrypto",
                pricingToggelGeneral: "عام",
                pricingToggelSchool: "المدرسة / الشركة",
                pricingBtn: "يختار",
                pricingSchoolPricingtag1: "6 اشهر",
                pricingSchoolPricingprice1: "25,000",
                pricingSchoolPricingpriceTag1: "مع ضريبة السلع والخدمات",
                pricingSchoolPricingpriceDis1: "لكل عضو، في السنة",
                    pricingSchoolPricingsubtitle11: "كل المميزات",
                        pricingSchoolPricingsubDetails111: "برامج العضوية",
                        pricingSchoolPricingsubDetails112: "خصومات المجموعة",
                    pricingSchoolPricingsubtitle12: "يتضمن 15 مباراة حية مجانية",
                    pricingSchoolPricingsubtitle13: "الوصول المبكر إلى المحتوى الجديدt",
                
                
                
                pricingSchoolPricingtag2: "لكل مباراة بث مباشر",
                pricingSchoolPricingprice2: "15,000",
                pricingSchoolPricingpriceTag2: "مع ضريبة السلع والخدمات",
                    pricingSchoolPricingsubtitle21: "كل المميزات",
                        pricingSchoolPricingsubDetails211: "برامج العضوية",
                        pricingSchoolPricingsubDetails212: "المحتوى الحصري",
                        pricingSchoolPricingsubDetails213: "خصومات المجموعة",
                        pricingSchoolPricingsubDetails214: "حزم قابلة للتخصيص",
                    pricingSchoolPricingsubtitle22: "يتضمن 30 مباراة حية مجانية",
                    pricingSchoolPricingsubtitle23: "دعم الأولوية",


                pricingGeneralPricingprice1: "حر",
                    
                        pricingGeneralPricingsubDetails111: "إبداعات البطولة",
                        pricingGeneralPricingsubDetails112: "مشاهدة النتيجة",
                        pricingGeneralPricingsubDetails113: "ابدأ المباراة",
                        pricingGeneralPricingsubDetails114: "تجربة خالية من الإعلانات",


                pricingGeneralPricingtag2: "لكل مباراة بث مباشر",
                pricingGeneralPricingprice2: "149",
                pricingGeneralPricingpriceTag2: "مع ضريبة السلع والخدمات",
                    
                        pricingGeneralPricingsubDetails211: "كل المميزات",
                        pricingGeneralPricingsubDetails212: "مفتاح ترخيص واحد",
                        pricingGeneralPricingsubDetails213: "خطة الاشتراك السنوية",
                        pricingGeneralPricingsubDetails214: "الدعم والتحديثات لمدة عام واحد",
                        pricingGeneralPricingsubDetails215: "شهريًا بدون إعلانات: 99 روبية هندية",
                        pricingGeneralPricingsubDetails216: "اشتراك 6 أشهر: 499 جنيهًا إسترلينيًا",
                        pricingGeneralPricingsubDetails217: "اشتراك لمدة 12 شهرًا: 999 دولارًا",
                
                pricingGeneralPricingta31: "2 كاميرات",
                pricingGeneralPricingta32: "شائع",
                pricingGeneralPricingprice3: "199",
                pricingGeneralPricingpriceTag3: "مع ضريبة السلع والخدمات",
                pricingGeneralPricingpriceDis3: "لكل عضو، في الشهر",
                    
                        pricingGeneralPricingsubDetails311: "شهريًا بدون إعلانات: 99 روبية هندية",
                        pricingGeneralPricingsubDetails312: "اشتراك 6 أشهر: 499 جنيهًا إسترلينيًا",
                        pricingGeneralPricingsubDetails313: "اشتراك لمدة 12 شهرًا: 999 دولارًا",

                pricingGeneralPricingta4: "4 كاميرات",
                pricingGeneralPricingprice4: "299",
                pricingGeneralPricingpriceTag4: "مع ضريبة السلع والخدمات",
                pricingGeneralPricingpriceDis4: "لكل عضو، في الشهر",
                    
                        pricingGeneralPricingsubDetails411: "كل المميزات",
                        pricingGeneralPricingsubDetails412: "مفتاح ترخيص واحد",
                        pricingGeneralPricingsubDetails413: "خطة الاشتراك السنوية",
                        pricingGeneralPricingsubDetails414: "الدعم والتحديث لمدة عام واحد",
                        pricingGeneralPricingsubDetails415: "شهريًا بدون إعلانات: 99 روبية هندية",
                        pricingGeneralPricingsubDetails416: "اشتراك 6 أشهر: 499 جنيهًا إسترلينيًا",
                        pricingGeneralPricingsubDetails417: "اشتراك لمدة 12 شهرًا: 999 دولارًا",
                    

                // login form
                loginBackBtn: "عُد",
                loginH1: "مرحبًا بعودتك!",
                loginH3: "جميل ان اراك مرة اخرى",
                loginP: "يقدم تطبيق YourSportz، التطبيق الديناميكي لكرة القدم، عددًا كبيرًا من المزايا الصحية وأسلوب الحياة. دعونا نتعمق في كيفية تعزيز رفاهيتك",
                loginH4: "تسجيل الدخول",
                loginFormEmail: "بريد إلكتروني",
                loginFormPassword: "كلمة المرور",
                loginFormEmailPlaceholder: "أدخل بريدك الإلكتروني",
                loginFormPasswordPlaceholder: "كلمة المرور",
                loginFormKeep: "أبق تسجيل دخولي",
                loginFormForgotPassword: "هل نسيت كلمة السر؟",
                loginFormAgreeLeft: "أنا أوافق على",
                loginFormAgreeRight: "بنود الخدمة وخصوصية السياسة",
                loginFormLoginLoading: "تحميل...",
                loginFormLoginBtn: "تسجيل الدخول",
                loginFormBottomP: "ليس لديك حساب؟",
                loginFormRegister: "يسجل",


                // register form
                registerBackBtn: "عُد",
                registerH1: "مرحبًا بعودتك!",
                registerH4: "جميل ان اراك مرة اخرى",
                registerP: "يقدم تطبيق YourSportz، التطبيق الديناميكي لكرة القدم، عددًا كبيرًا من المزايا الصحية وأسلوب الحياة. دعونا نتعمق في كيفية تعزيز رفاهيتك",
                registerToggleGeneral: "عام",
                registerToggleSchool: "المدرسة / الشركة",
                registerFormName: "الاسم الكامل",
                registerFormInstit: "مؤسسة",
                registerFormComp: "شركة",
                registerFormAdd: "عنوان",
                registerFormEmail: "بريد إلكتروني",
                registerFormPassword: "كلمة المرور",
                registerFormConfirmPassword: "تأكيد كلمة المرور",
                registerFormAgree: "أوافق على شروط الخدمة وسياسة الخصوصية",
                registerFormLoading: "تحميل...",
                registerFormRegister: "يسجل",
                registerFormAlready: "هل لديك حساب؟",
                registerFormLogin: "تسجيل الدخول",


                // forgot password
                forgetPasswordH3: "نسيت كلمة المرور",
                forgetPasswordP: "أدخل عنوان البريد الإلكتروني المرتبط بحسابك.",
                forgetPasswordLoading: "تحميل...",
                forgetPasswordSubmit: "يُقدِّم",
                forgetPasswordBack: "العودة لتسجيل الدخول",
                
                 // Early Access page
                 earlyAccessH2SpamLeft: "لك",
                 earlyAccessH2SpamRight: "سبورتز",
                 earlyAccessH1: "متحمس للوصول المبكر! احصل على نظرة خاطفة قبل الإطلاق، واستكشف الميزات، وشكل مستقبل منصاتنا",
                 earlyAccessH2: "انضم إلى قائمة الانتظار الآن للحصول على الوصول المبكر",
                 earlyAccessButton: "طلب الدخول",
                 earlyAccessInputField: "أدخل رقم هاتفك",

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
                matchesH2: "Por que YourSportz se destaca",
                matchesContainerHeading: "Você sabe",

                // index 1
                title1: "Interface intuitiva de pontuação de partidas",
                desciption1: "Direcione o placar do jogo com um único toque usando nosso aplicativo de pontuação. Registre com precisão gols, faltas e muito mais, com um recurso 'Desfazer' para correções. Simples, rápido e preciso – seja o marcador definitivo do jogo.",
                hoverTitle1: "Saúde cardiovascular:",
                hoverDescription1: "O movimento constante no futebol – cobrindo 8 a 11 quilômetros por jogo – mantém os batimentos cardíacos elevados.",

                // index 2
                title2: "Comentário da partida em tempo real",
                desciption2: "Fique atualizado com cada jogo. Nosso recurso de comentários ao vivo mantém você informado com atualizações minuto a minuto. Desde jogadas importantes até decisões cruciais, nunca perca um momento da ação.",
                hoverTitle2: "Construção de força",
                hoverDescription2: "O futebol trabalha o corpo inteiro. A força da parte inferior do corpo é essencial para chutar, pular e torcer, enquanto a força da parte superior do corpo ajuda a proteger a bola e a força geral",

                // index 3
                title3: "Vá ao vivo: transmita futebol com talento",
                desciption3: "Eleve seus jogos de futebol a um nível global com nossa transmissão ao vivo avançada. Integre-se facilmente ao seu canal do YouTube para obter exposição máxima, exibir atualizações dinâmicas de pontuação e apreciar os destaques criados por IA dos momentos de pico do seu jogo. Acenda o espírito do futebol e compartilhe cada gol e glória ao vivo com seu público.",
                hoverTitle3: "Tônus muscular e queima de gordura:",
                hoverDescription3: "O futebol envolve fibras musculares de contração lenta e rápida, promovendo massa muscular e perda de gordura. As vias de energia aeróbica-anaeróbica contribuem para a queima de calorias.",

                // index 4
                title4: "Cada jogo, cada palavra, no seu idioma",
                desciption4: "Abrace a emoção dos esportes em seu idioma com nosso aplicativo. Aproveite comentários ao vivo, atualizações em tempo real e todos os destaques no seu idioma preferido. Quebre as barreiras linguísticas e conecte-se ao jogo como nunca antes.",
                hoverTitle4: "Resistência Mental:",
                hoverDescription4: "O futebol aguça a concentração, a tomada de decisões e o trabalho em equipe. Promove a disciplina, o envolvimento social e a confiança.",
                
                
                
                // devices section
                androidApp: "Aplicativo Android",
                iosApp: "aplicativo iOS",


                // faq section
                faqh2: "perguntas frequentes",

                // id 1
                question1: "O que é YourSport?",
                answer1: "YourSportz é um aplicativo de futebol completo que permite transmissão de jogos em HD, pontuação ao vivo e rastreamento de desempenho. Conecte-se a jogos e torneios locais e siga os melhores jogadores – tudo em uma plataforma dinâmica.",

                // id 2
                question2: "O YourSportz é um aplicativo de esportes de fantasia ou apostas?",
                answer2: "YourSportz é um aplicativo de futebol completo que permite transmissão de jogos em HD, pontuação ao vivo e rastreamento de desempenho. Conecte-se a jogos e torneios locais e siga os melhores jogadores – tudo em uma plataforma dinâmica.",

                // id 3
                question3: "Posso acompanhar times ou jogadores de futebol locais específicos no YourSportz?",
                answer3: "YourSportz é um aplicativo de futebol completo que permite transmissão de jogos em HD, pontuação ao vivo e rastreamento de desempenho. Conecte-se a jogos e torneios locais e siga os melhores jogadores – tudo em uma plataforma dinâmica.",

                // id 4
                question4: "A transmissão ao vivo está disponível para jogos de futebol locais no YourSportz?",
                answer4: "YourSportz é um aplicativo de futebol completo que permite transmissão de jogos em HD, pontuação ao vivo e rastreamento de desempenho. Conecte-se a jogos e torneios locais e siga os melhores jogadores – tudo em uma plataforma dinâmica.",

                // id 5
                question5: "Quais recursos o YourSportz oferece?",
                answer5: "YourSportz é um aplicativo de futebol completo que permite transmissão de jogos em HD, pontuação ao vivo e rastreamento de desempenho. Conecte-se a jogos e torneios locais e siga os melhores jogadores – tudo em uma plataforma dinâmica.",


                // footer section
                socialH2: "Social",
                    socialLi1: " E-mail",
                    socialLi2: " Instagram",
                    socialLi3: " Facebook",
                    socialLi4: " LinkedIn",
                    socialLi5: " Youtube",
                needH2: "Preciso de ajuda",
                    needLi1: "Contate-nos",
                    needLi2: "Preços",
                    needLi3: "Perguntas frequentes",
                legalH2: "Jurídico",
                    legalLi1: "Termos de uso",
                    legalLi2: "política de Privacidade",

                copyright: "yoursportz por Navrekh Technologies PVT LTD",


                // about us page
                aboutusRightH3: "Nossa visão",
                aboutusRightP: "Capacitando Atletas Apaixonados YourSportz imagina um mundo onde todos os entusiastas do esporte, independentemente da disciplina escolhida, possam perseguir sua paixão com dedicação inabalável. Acreditamos que o esporte transcende fronteiras, culturas e origens, unindo pessoas por meio do compartilhamento de experiências e conquistas.",
                aboutusLeftH3: "Nosso objetivo",
                aboutusLeftP: "Liberando o potencial atlético Nosso objetivo é criar uma plataforma esportiva abrangente que atenda indivíduos em vários esportes e jogos. Veja como planejamos alcançá-lo:",
                
                
                aboutuslipspan1: "Integração multiesportiva:",
                aboutuslip1: "YourSportz integrará perfeitamente vários esportes e jogos, fornecendo um centro unificado para entusiastas. Os usuários podem alternar entre monitorar arremessos de basquete, gols de futebol, saques de tênis e muito mais – tudo em um único aplicativo.",
                aboutuslipspan2: "Experiência personalizada:",
                aboutuslip2: "Entendemos que a jornada de cada atleta é única. YourSportz adaptará seus recursos para atender às preferências individuais. Painéis personalizados, planos de treinamento e análises de desempenho capacitarão os usuários a definir e atingir seus objetivos.",
                aboutuslipspan3: "Estatísticas abrangentes:",
                aboutuslip3: "YourSportz será um tesouro de estatísticas. Os usuários podem acompanhar suas métricas de desempenho, incluindo pontos marcados, distância percorrida, velocidade, precisão e muito mais. Quer você seja um guerreiro de fim de semana ou um atleta profissional, nosso aplicativo fornecerá informações valiosas para aprimorar seu jogo.",
                aboutuslipspan4: "Comunidade e Desafios: ",
                aboutuslip4: "Conectar atletas está no coração do YourSportz. Os usuários podem ingressar em comunidades, compartilhar suas conquistas e participar de desafios. Competições amigáveis, tabelas de classificação e eventos virtuais promoverão a camaradagem e a competição saudável.",
                aboutuslipspan5: "Motivação e recompensas:",
                aboutuslip5: "Acreditamos em celebrar o progresso. Yoursportz motivará os usuários por meio de conquistas, emblemas e marcos. Seja atingindo um recorde pessoal ou completando um desafio de condicionamento físico, nosso aplicativo reconhecerá e recompensará a dedicação.",
                aboutuslipspan6: "Acessível e Inclusivo: ",
                aboutuslip6: "Yoursportz pretende ser acessível a todos. Garantiremos a compatibilidade com vários dispositivos, sistemas operacionais e níveis de habilidade. Suporte a idiomas, interfaces adaptáveis ​​e acessibilidade farão do Yoursportz um companheiro esportivo global.",
            
            
                // contact us page
                contactUsH3: "### Estamos aqui para ajudar!",
                contactUsP: "**Tem alguma pergunta?** Adoramos ouvir sua opinião! Quer você tenha alguma dúvida sobre nossos serviços, precise de ajuda ou esteja elaborando a próxima grande ideia e precise de alguns conselhos, nossa equipe é toda ouvidos.",
                
                formHeaderP: "Basta preencher o formulário abaixo e entraremos em contato com você na velocidade da luz.",

                formName: "Nome completo",
                formPhone: "Número de telefone",
                formEmail: "Identificação do email",
                formSub: "Assunto",
                formMsg: "Mensagem",
                formTypeMsg: "Digite sua mensagem",
                formSubmitBtn: "Enviar",


                // terms and conditons page
                termsH1: "Termos e Condições",

                termsTitle1: "Termos e Condições",
                    termsContent11: "O aplicativo YourSportz proíbe nudez, violência ou conteúdo pornográfico; os infratores serão banidos.",
                    termsContent12: "Os usuários são os únicos responsáveis ​​pelo conteúdo postado; YourSportz reserva-se o direito de remover conteúdo impróprio.",
                    termsContent13: "YourSportz não se responsabiliza por problemas técnicos; será tentada uma resolução imediata.",
                    termsContent14: "Os termos estão sujeitos a alterações; os usuários serão notificados sobre atualizações.",
                termsTitle2: "Política de Cookies:",
                    termsContent21: "Os cookies melhoram a experiência do usuário ao lembrar preferências.",
                    termsContent22: "Os tipos incluem cookies essenciais, analíticos e de publicidade.",
                    termsContent23: "Os usuários podem gerenciar cookies nas configurações do aplicativo; a desativação pode afetar a funcionalidade.",
                termsTitle3: "Política de Privacidade:",
                    termsContent31: "YourSportz coleta dados pessoais e de uso para funcionalidades e análises do aplicativo.",
                    termsContent32: "São implementadas medidas de segurança de dados; aplicam-se as políticas de privacidade de serviços de terceiros.",
                    termsContent33: "As atualizações da política podem ocorrer periodicamente; verifique a versão mais recente no aplicativo.",
                termsTitle4: "Política de Privacidade e Reembolso:",
                    termsContent41: "Os dados do usuário são coletados para estatísticas e insights, protegidos com criptografia e retidos conforme necessário.",
                    termsContent42: "Os usuários consentem com a coleta, uso e retenção de dados usando o aplicativo.",
                    termsContent43: "Os reembolsos não são emitidos para transações pré-pagas, a menos que os serviços apresentem defeitos ou sejam exigidos por lei.",
                termsTitle5: "Política de reembolso do aplicativo YourSportz:",
                    termsContent51: "As transações pré-pagas não são reembolsáveis ​​depois que os serviços são utilizados.",
                    termsContent52: "Os reembolsos podem ser considerados para serviços defeituosos no prazo de 7 dias de uso.",
                    termsContent53: "Obrigações legais podem exigir reembolsos de acordo com as leis ou regulamentos aplicáveis",

                termLeftP: "Para qualquer assistência, entre em contato com nosso suporte ao cliente @ yoursportz.in.",
                termLeftH4: "Obrigado por escolher YourSportz!", 
            

                // privacy policy page
                privacyH1: "política de Privacidade",

                privacyTitle1: "Política de Cookies:",
                    privacyContent11: "Os cookies melhoram a experiência do usuário, lembrando preferências",
                    privacyContent12: "Os tipos incluem cookies essenciais, analíticos e de publicidade.",
                    privacyContent13: "Os usuários podem gerenciar cookies nas configurações do aplicativo; a desativação pode afetar a funcionalidade.",
                privacyTitle2: "Política de Privacidade:",
                    privacyContent21: "YourSportz coleta dados pessoais e de uso para funcionalidades e análises do aplicativo.",
                    privacyContent22: "São implementadas medidas de segurança de dados; aplicam-se as políticas de privacidade de serviços de terceiros.",
                    privacyContent23: "As atualizações da política podem ocorrer periodicamente; verifique a versão mais recente no aplicativo.",
                privacyTitle3: "Política de Privacidade e Reembolso:",
                    privacyContent31: "Os dados do usuário são coletados para estatísticas e insights, protegidos com criptografia e retidos conforme necessário.",
                    privacyContent32: "Os usuários consentem com a coleta, uso e retenção de dados usando o aplicativo.",
                    privacyContent33: "Os reembolsos não são emitidos para transações pré-pagas, a menos que os serviços apresentem defeitos ou sejam exigidos por lei.",

                privacyLeftP: "Para qualquer assistência, entre em contato com nosso suporte ao cliente @ yoursportz.in.",
                privacyLeftH4: "Obrigado por escolher YourSportz!", 
            

                // pricing page
                pricingH1: "Escolha um plano certo para você",
                pricingP: "Serviço pré-pago, cancele a qualquer momento.",
                pricingH4: "Métodos de Pagamento",
                pricingbottomP: "Aceitamos Visa, American Express, Mastercard, Paypal e Crypto",
                pricingToggelGeneral: "Em geral",
                pricingToggelSchool: "Escolar / Corporativo",
                pricingBtn: "Escolher",
                pricingSchoolPricingtag1: "6 meses",
                pricingSchoolPricingprice1: "25,000",
                pricingSchoolPricingpriceTag1: "Com ICMS",
                pricingSchoolPricingpriceDis1: "Por membro, por ano",
                    pricingSchoolPricingsubtitle11: "Todos os recursos",
                        pricingSchoolPricingsubDetails111: "Programas de Sócios",
                        pricingSchoolPricingsubDetails112: "Descontos para grupos",
                    pricingSchoolPricingsubtitle12: "IInclui 15 partidas ao vivo gratuitas",
                    pricingSchoolPricingsubtitle13: "Acesso antecipado a novo conteúdo",
                
                
                
                pricingSchoolPricingtag2: "por transmissão ao vivo por partida",
                pricingSchoolPricingprice2: "15,000",
                pricingSchoolPricingpriceTag2: "com ICMS",
                    pricingSchoolPricingsubtitle21: "Todos os recursos",
                        pricingSchoolPricingsubDetails211: "Programas de Sócios",
                        pricingSchoolPricingsubDetails212: "Conteúdo exclusivo",
                        pricingSchoolPricingsubDetails213: "Descontos para grupos",
                        pricingSchoolPricingsubDetails214: "Pacotes personalizáveis",
                    pricingSchoolPricingsubtitle22: "Inclui 30 partidas ao vivo gratuitas",
                    pricingSchoolPricingsubtitle23: "Suporte prioritário",


                pricingGeneralPricingprice1: "Livre",
                    
                        pricingGeneralPricingsubDetails111: "Criações de torneio",
                        pricingGeneralPricingsubDetails112: "Assistir pontuação",
                        pricingGeneralPricingsubDetails113: "Iniciar partida",
                        pricingGeneralPricingsubDetails114: "Experiência sem anúncios",


                pricingGeneralPricingtag2: "por transmissão ao vivo por partida",
                pricingGeneralPricingprice2: "149",
                pricingGeneralPricingpriceTag2: "com ICMS",
                    
                        pricingGeneralPricingsubDetails211: "Todos os recursos",
                        pricingGeneralPricingsubDetails212: "Uma chave de licença",
                        pricingGeneralPricingsubDetails213: "Plano de assinatura anual",
                        pricingGeneralPricingsubDetails214: "Um ano de suporte e atualizações",
                        pricingGeneralPricingsubDetails215: "Por mês sem anúncios: ₹ 99",
                        pricingGeneralPricingsubDetails216: "Assinatura de 6 meses: ₹499",
                        pricingGeneralPricingsubDetails217: "Assinatura de 12 meses: ₹999",
                
                pricingGeneralPricingtag31: "2 câmeras",
                pricingGeneralPricingta32: "popular",
                pricingGeneralPricingprice3: "199",
                pricingGeneralPricingpriceTag3: "com ICMS",
                pricingGeneralPricingpriceDis3: "Por membro, por mês",
                    
                        pricingGeneralPricingsubDetails311: "Por mês sem anúncios: ₹ 99",
                        pricingGeneralPricingsubDetails312: "Assinatura de 6 meses: ₹499",
                        pricingGeneralPricingsubDetails313: "Assinatura de 12 meses: ₹999",

                        pricingGeneralPricingtag4: "4 câmeras",
                        pricingGeneralPricingprice4: "299",
                        pricingGeneralPricingpriceTag4: "com ICMS",
                        pricingGeneralPricingpriceDis4: "Por membro, por mês",
                            
                                pricingGeneralPricingsubDetails411: "Todos os recursos",
                                pricingGeneralPricingsubDetails412: "Uma chave de licença",
                                pricingGeneralPricingsubDetails413: "Plano de assinatura anual",
                                pricingGeneralPricingsubDetails414: "Um ano de suporte e atualização",
                                pricingGeneralPricingsubDetails415: "Por mês sem anúncios: ₹99",
                                pricingGeneralPricingsubDetails416: "6 assinatura mensal: ₹499",
                                pricingGeneralPricingsubDetails417: "12 assinatura mensal: ₹999",
                            
                    

                // login form
                loginBackBtn: "Volte",
                loginH1: "bem vindo de volta!",
                loginH3: "Que bom ver você de novo",
                loginP: "YourSportz, o aplicativo dinâmico de futebol, oferece uma infinidade de benefícios de saúde e estilo de vida. Vamos nos aprofundar em como isso pode melhorar seu bem-estar",
                loginH4: "Conecte-se",
                loginFormEmail: "bem vindo de volta!",
                loginFormPassword: "bem vindo de volta!",
                loginFormEmailPlaceholder: "Digite seu e-mail",
                loginFormPasswordPlaceholder: "Senha",
                loginFormKeep: "Mantenha-me conectado",
                loginFormForgotPassword: "Esqueceu sua senha?",
                loginFormAgreeLeft: "Estou de acordo com",
                loginFormAgreeRight: "Termos de serviço e política de privacidade",
                loginFormLoginLoading: "Loading...",
                loginFormLoginBtn: "Conecte-se",
                loginFormBottomP: "Não tenho uma conta?",
                loginFormRegister: "Registro",


                // register form
                registerBackBtn: "Volte",
                registerH1: "bem vindo de volta!",
                registerH4: "Que bom ver você de novo",
                registerP: "YourSportz, o aplicativo dinâmico de futebol, oferece uma infinidade de benefícios de saúde e estilo de vida. Vamos nos aprofundar em como isso pode melhorar seu bem-estar",
                registerToggleGeneral: "Em geral",
                registerToggleSchool: "Escola / Corporativo",
                registerFormName: "Nome completo",
                registerFormInstit: "Instituição",
                registerFormComp: "Empresa",
                registerFormAdd: "Endereço",
                registerFormEmail: "E-mail",
                registerFormPassword: "Senha",
                registerFormConfirmPassword: "Confirme sua senha",
                registerFormAgree: "Concordo com os Termos de Serviço e Política de Privacidade",
                registerFormLoading: "Carregando...",
                registerFormRegister: "Registro",
                registerFormAlready: "Já tem uma conta?",
                registerFormLogin: "Conecte-se",


                // forgot password
                forgetPasswordH3: "Esqueceu a senha",
                forgetPasswordP: "Insira o endereço de e-mail associado à sua conta.",
                forgetPasswordLoading: "Carregando...",
                forgetPasswordSubmit: "Enviar",
                forgetPasswordBack: "Volte ao login",
                
                 // Early Access page
                 earlyAccessH2SpamLeft: "Seu",
                 earlyAccessH2SpamRight: "Esportez",
                 earlyAccessH1: "Animado pelo acesso antecipado! Dê uma olhada antes do lançamento, explore recursos e molde o futuro de nossas plataformas.",
                 earlyAccessH2: "Junte-se à lista de espera agora para obter acesso antecipado",
                 earlyAccessButton: "REQUEST ACCESS",
                 earlyAccessInputField: "Digite seu número de telefone",

            }
        },
        es:{
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
                matchesH2: "Por qué se destaca YourSportz",
                matchesContainerHeading: "Sabes",

                // index 1
                title1: "Interfaz intuitiva de puntuación de partidos",
                desciption1: "Dirige la puntuación del juego con un solo toque usando nuestra aplicación de anotador. Registra con precisión goles, faltas y más, con una función 'Deshacer' para correcciones. Sencillo, rápido y preciso: conviértete en el anotador definitivo del juego.",
                hoverTitle1: "Salud cardiovascular:",
                hoverDescription1: "El movimiento constante en el fútbol (de 8 a 11 kilómetros por partido) mantiene el ritmo cardíaco elevado.",

                // index 2
                title2: "Comentarios del partido en tiempo real",
                desciption2: "Manténgase actualizado con cada jugada. Nuestra función de comentarios en vivo lo mantiene informado con actualizaciones minuto a minuto. Desde jugadas clave hasta decisiones fundamentales, no te pierdas ni un momento de la acción.",
                hoverTitle2: "Desarrollo de fuerza",
                hoverDescription2: "El fútbol trabaja todo el cuerpo. La fuerza de la parte inferior del cuerpo es esencial para patear, saltar y girar, mientras que la fuerza de la parte superior del cuerpo ayuda a proteger la pelota y la potencia general.",

                // index 3
                title3: "Transmita en vivo: transmita fútbol con estilo",
                desciption3: "Eleva tus partidos de fútbol a un escenario global con nuestra transmisión en vivo avanzada. Integre sin esfuerzo con su canal de YouTube para obtener la máxima exposición, muestre actualizaciones dinámicas de puntuación y disfrute de los momentos destacados de su juego creados por IA. Enciende el espíritu del fútbol y comparte cada gol y gloria en vivo con tu audiencia.",
                hoverTitle3: "Tono muscular y quema de grasa:",
                hoverDescription3: "El fútbol involucra fibras musculares tanto de contracción lenta como de contracción rápida, lo que promueve la pérdida de masa muscular y grasa. Las vías energéticas aeróbicas-anaeróbicas contribuyen a la quema de calorías.",

                // index 4
                title4: "Cada juego, cada palabra, en tu idioma",
                desciption4: "Abraza la emoción de los deportes en tu idioma con nuestra aplicación. Disfrute de comentarios en vivo, actualizaciones en tiempo real y todos los aspectos más destacados en su idioma preferido. Rompe las barreras del idioma y conéctate con el juego como nunca antes.",
                hoverTitle4: "Dureza mental:",
                hoverDescription4: "El fútbol agudiza la concentración, la toma de decisiones y el trabajo en equipo. Fomenta la disciplina, el compromiso social y la confianza.",
                
                
                
                // devices section
                androidApp: "Aplicación Android",
                iosApp: "aplicación ios",


                // faq section
                faqh2: "Preguntas frecuentes",

                // id 1
                question1: "¿Qué es TuDeporte?",
                answer1: "YourSportz es una aplicación de fútbol todo en uno que permite la transmisión de partidos en HD, puntuación en vivo y seguimiento del rendimiento. Conéctese con juegos y torneos locales y siga a los mejores jugadores, todo en una plataforma dinámica.",

                // id 2
                question2: "¿YourSportz es una aplicación de apuestas o deportes de fantasía?",
                answer2: "YourSportz es una aplicación de fútbol todo en uno que permite la transmisión de partidos en HD, puntuación en vivo y seguimiento del rendimiento. Conéctese con juegos y torneos locales y siga a los mejores jugadores, todo en una plataforma dinámica.",

                // id 3
                question3: "¿Puedo seguir equipos o jugadores de fútbol locales específicos en YourSportz?",
                answer3: "YourSportz es una aplicación de fútbol todo en uno que permite la transmisión de partidos en HD, puntuación en vivo y seguimiento del rendimiento. Conéctese con juegos y torneos locales y siga a los mejores jugadores, todo en una plataforma dinámica.",

                // id 4
                question4: "¿Está disponible la transmisión en vivo de partidos de fútbol locales en YourSportz?",
                answer4: "YourSportz es una aplicación de fútbol todo en uno que permite la transmisión de partidos en HD, puntuación en vivo y seguimiento del rendimiento. Conéctese con juegos y torneos locales y siga a los mejores jugadores, todo en una plataforma dinámica.",

                // id 5
                question5: "¿Qué características ofrece YourSportz?",
                answer5: "YourSportz es una aplicación de fútbol todo en uno que permite la transmisión de partidos en HD, puntuación en vivo y seguimiento del rendimiento. Conéctese con juegos y torneos locales y siga a los mejores jugadores, todo en una plataforma dinámica.",


                // footer section
                socialH2: "Social",
                    socialLi1: " Correo electrónico",
                    socialLi2: " Instagram",
                    socialLi3: " Facebook",
                    socialLi4: " LinkedIn",
                    socialLi5: " Youtube",
                needH2: "Necesitas ayuda",
                    needLi1: "Contacta con nosotros",
                    needLi2: "Precios",
                    needLi3: "Preguntas más frecuentes",
                legalH2: "Legal",
                    legalLi1: "Condiciones de uso",
                    legalLi2: "política de privacidad",

                copyright: "yoursportz por Navrekh Technologies PVT LTD",


                // about us page
                aboutusRightH3: "Nuestra visión",
                aboutusRightP: "Empoderando a los atletas apasionados YourSportz imagina un mundo donde todos los entusiastas de los deportes, independientemente de la disciplina que elijan, puedan perseguir su pasión con una dedicación inquebrantable. Creemos que los deportes trascienden fronteras, culturas y orígenes, uniendo a las personas a través de experiencias y logros compartidos.",
                aboutusLeftH3: "Nuestra meta",
                aboutusLeftP: "Liberar el potencial del atletismo Nuestro objetivo es crear una plataforma deportiva integral que atienda a personas de diversos deportes y juegos. Así es como planeamos lograrlo:",
                
                
                aboutuslipspan1: "Integración multideporte: ",
                aboutuslip1: "YourSportz integrará a la perfección múltiples deportes y juegos, proporcionando un centro unificado para los entusiastas. Los usuarios pueden alternar entre el seguimiento de sus tiros de baloncesto, goles de fútbol, ​​servicios de tenis y más, todo dentro de una sola aplicación.",
                aboutuslipspan2: "Experiencia personalizada: ",
                aboutuslip2: "Entendemos que el viaje de cada atleta es único. YourSportz adaptará sus funciones para satisfacer las preferencias individuales. Los paneles personalizados, los planes de capacitación y los análisis de desempeño permitirán a los usuarios establecer y alcanzar sus objetivos.",
                aboutuslipspan3: "Estadísticas completas: ",
                aboutuslip3: "YourSportz será un tesoro de estadísticas. Los usuarios pueden realizar un seguimiento de sus métricas de rendimiento, incluidos los puntos anotados, la distancia recorrida, la velocidad, la precisión y más. Ya sea que sea un guerrero de fin de semana o un atleta profesional, nuestra aplicación le brindará información valiosa para mejorar su juego.",
                aboutuslipspan4: "Comunidad y desafíos: ",
                aboutuslip4: "Conectar a los atletas es el corazón de YourSportz. Los usuarios pueden unirse a comunidades, compartir sus logros y participar en desafíos. Las competiciones amistosas, las tablas de clasificación y los eventos virtuales fomentarán la camaradería y la competencia sana.",
                aboutuslipspan5: "Motivación y recompensas: ",
                aboutuslip5: "Creemos en celebrar el progreso. Yoursportz motivará a los usuarios a través de logros, insignias e hitos. Ya sea alcanzar una marca personal o completar un desafío de acondicionamiento físico, nuestra aplicación reconocerá y recompensará la dedicación.",
                aboutuslipspan6: "Accesible e inclusivo: ",
                aboutuslip6: "Yoursportz pretende ser accesible para todos. Garantizaremos la compatibilidad con varios dispositivos, sistemas operativos y niveles de habilidad. La compatibilidad con idiomas, las interfaces adaptables y la asequibilidad harán de Yoursportz un compañero deportivo global.",
            
            
                // contact us page
                contactUsH3: "### ¡Estamos aquí para ayudar!",
                contactUsP: "**¿Tienes alguna pregunta?** ¡Nos encanta saber de ti! Ya sea que tenga una consulta sobre nuestros servicios, necesite ayuda o esté elaborando la próxima gran idea y necesite algún consejo, nuestro equipo es todo oídos.",
                
                formHeaderP: "Simplemente complete el formulario a continuación y nos comunicaremos con usted a la velocidad del rayo.",

                formName: "Nombre completo",
                formPhone: "Número de teléfono",
                formEmail: "Identificación de correo",
                formSub: "Sujeto",
                formMsg: "mensaje",
                formTypeMsg: "Escribe tu mensaje",
                formSubmitBtn: "Entregar",


                // terms and conditons page
                termsH1: "Términos y condiciones",

                termsTitle1: "Término y condición",
                    termsContent11: "La aplicación YourSportz prohíbe contenido de desnudez, violencia o pornografía; los infractores serán prohibidos.",
                    termsContent12: "Los usuarios son los únicos responsables del contenido publicado; YourSportz se reserva el derecho de eliminar contenido inapropiado.",
                    termsContent13: "YourSportz no es responsable de problemas técnicos; Se intentará una pronta resolución.",
                    termsContent14: "Los terminos estan sujetos a cambios; Los usuarios serán notificados de las actualizaciones.",
                termsTitle2: "Política de cookies:",
                    termsContent21: "Las cookies mejoran la experiencia del usuario al recordar preferencias.",
                    termsContent22: "Los tipos incluyen cookies esenciales, analíticas y publicitarias.",
                    termsContent23: "Los usuarios pueden administrar las cookies en la configuración de la aplicación; La desactivación puede afectar la funcionalidad.",
                termsTitle3: "Política de privacidad:",
                    termsContent31: "YourSportz recopila datos personales y de uso para la funcionalidad y análisis de la aplicación.",
                    termsContent32: "Se implementan medidas de seguridad de datos; Se aplican las políticas de privacidad de los servicios de terceros.",
                    termsContent33: "Las actualizaciones de políticas pueden ocurrir periódicamente; verifique la última versión en la aplicación.",
                termsTitle4: "Política de privacidad y reembolso:",
                    termsContent41: "Los datos del usuario se recopilan para obtener estadísticas e información, se protegen con cifrado y se conservan según sea necesario.",
                    termsContent42: "Los usuarios dan su consentimiento para la recopilación, el uso y la retención de datos mediante el uso de la aplicación.",
                    termsContent43: "No se emiten reembolsos por transacciones prepagas a menos que los servicios sean defectuosos o lo exija la ley.",
                termsTitle5: "Política de reembolso de la aplicación YourSportz:",
                    termsContent51: "Las transacciones prepagas no son reembolsables una vez que se utilizan los servicios.",
                    termsContent52: "Se pueden considerar reembolsos por servicios defectuosos dentro de los 7 días posteriores al uso.",
                    termsContent53: "Las obligaciones legales pueden requerir reembolsos según las leyes o regulaciones aplicables.",

                termLeftP: "Para cualquier ayuda, comuníquese con nuestro servicio de atención al cliente @ yoursportz.in.",
                termLeftH4: "¡Gracias por elegir YourSportz!", 
            

                // privacy policy page
                privacyH1: "política de privacidad",

                privacyTitle1: "Política de cookies:",
                    privacyContent11: "Las cookies mejoran la experiencia del usuario al recordar preferencias",
                    privacyContent12: "Los tipos incluyen cookies esenciales, analíticas y publicitarias.",
                    privacyContent13: "Los usuarios pueden administrar las cookies en la configuración de la aplicación; La desactivación puede afectar la funcionalidad.",
                privacyTitle2: "Política de privacidad:",
                    privacyContent21: "YourSportz recopila datos personales y de uso para la funcionalidad y análisis de la aplicación.",
                    privacyContent22: "Se implementan medidas de seguridad de datos; Se aplican las políticas de privacidad de los servicios de terceros.",
                    privacyContent23: "Las actualizaciones de políticas pueden ocurrir periódicamente; verifique la última versión en la aplicación.",
                privacyTitle3: "Política de privacidad y reembolso:",
                    privacyContent31: "Los datos del usuario se recopilan para obtener estadísticas e información, se protegen con cifrado y se conservan según sea necesario.",
                    privacyContent32: "Los usuarios dan su consentimiento para la recopilación, el uso y la retención de datos mediante el uso de la aplicación.",
                    privacyContent33: "No se emiten reembolsos por transacciones prepagas a menos que los servicios sean defectuosos o lo exija la ley.",

                privacyLeftP: "Para cualquier ayuda, comuníquese con nuestro servicio de atención al cliente @ yoursportz.in.",
                privacyLeftH4: "¡Gracias por elegir YourSportz!", 
            

                // pricing page
                pricingH1: "Elija un plan adecuado para usted",
                pricingP: "Servicio de pago por uso, cancele en cualquier momento.",
                pricingH4: "Métodos de pago",
                pricingbottomP: "Aceptamos Visa, American Express, Mastercard, Paypal y Crypto",
                pricingToggelGeneral: "General",
                pricingToggelSchool: "Escuela / corporativo",
                pricingBtn: "Elegir",
                pricingSchoolPricingtag1: "6 meses",
                pricingSchoolPricingprice1: "25,000",
                pricingSchoolPricingpriceTag1: "Con IVA",
                pricingSchoolPricingpriceDis1: "Por miembro, por año",
                    pricingSchoolPricingsubtitle11: "Todas las características",
                        pricingSchoolPricingsubDetails111: "Programas de membresía",
                        pricingSchoolPricingsubDetails112: "Descuentos para grupos",
                    pricingSchoolPricingsubtitle12: "Incluye 15 partidos en vivo gratis",
                    pricingSchoolPricingsubtitle13: "Acceso temprano a contenido nuevo",
                
                
                
                pricingSchoolPricingtag2: "transmisión en vivo por partido",
                pricingSchoolPricingprice2: "15,000",
                pricingSchoolPricingpriceTag2: "con IVA",
                    pricingSchoolPricingsubtitle21: "Todas las características",
                        pricingSchoolPricingsubDetails211: "Programas de membresía",
                        pricingSchoolPricingsubDetails212: "Contenido exclusivo",
                        pricingSchoolPricingsubDetails213: "Descuentos para grupos",
                        pricingSchoolPricingsubDetails214: "Paquetes personalizables",
                    pricingSchoolPricingsubtitle22: "Incluye 30 partidos en vivo gratis",
                    pricingSchoolPricingsubtitle23: "Soporte prioritario",


                pricingGeneralPricingprice1: "Gratis",
                    
                        pricingGeneralPricingsubDetails111: "Creaciones de tormento",
                        pricingGeneralPricingsubDetails112: "Ver puntuación",
                        pricingGeneralPricingsubDetails113: "Empezar partido",
                        pricingGeneralPricingsubDetails114: "Experiencia sin publicidad",


                pricingGeneralPricingtag2: "transmisión en vivo por partido",
                pricingGeneralPricingprice2: "149",
                pricingGeneralPricingpriceTag2: "con IVA",
                    
                        pricingGeneralPricingsubDetails211: "Todas las características",
                        pricingGeneralPricingsubDetails212: "Una clave de licencia",
                        pricingGeneralPricingsubDetails213: "Plan de suscripción anual",
                        pricingGeneralPricingsubDetails214: "Un año de soporte y actualizaciones",
                        pricingGeneralPricingsubDetails215: "Por mes sin publicidad: ₹99",
                        pricingGeneralPricingsubDetails216: "Suscripción de 6 meses: ₹499",
                        pricingGeneralPricingsubDetails217: "Suscripción de 12 meses: ₹999",
                
                pricingGeneralPricingtag31: "2 cámaras",
                pricingGeneralPricingta32: "popular",
                pricingGeneralPricingprice3: "199",
                pricingGeneralPricingpriceTag3: "con IVA",
                pricingGeneralPricingpriceDis3: "Por miembro, por mes",
                    
                        pricingGeneralPricingsubDetails311: "Por mes sin publicidad: ₹99",
                        pricingGeneralPricingsubDetails312: "Suscripción de 6 meses: ₹499",
                        pricingGeneralPricingsubDetails313: "Suscripción de 12 meses: ₹99",

                pricingGeneralPricingtag4: "4 cámaras",
                pricingGeneralPricingprice4: "299",
                pricingGeneralPricingpriceTag4: "con IVA",
                pricingGeneralPricingpriceDis4: "Por miembro, por mes",
                    
                        pricingGeneralPricingsubDetails411: "Todas las características",
                        pricingGeneralPricingsubDetails412: "Una clave de licencia",
                        pricingGeneralPricingsubDetails413: "Plan de suscripción anual",
                        pricingGeneralPricingsubDetails414: "Un año de soporte y actualización",
                        pricingGeneralPricingsubDetails415: "Por mes sin publicidad: ₹99",
                        pricingGeneralPricingsubDetails416: "Suscripción de 6 meses: ₹499",
                        pricingGeneralPricingsubDetails417: "Suscripción de 12 meses: ₹999",
                    

                // login form
                loginBackBtn: "Regresa",
                loginH1: "¡Bienvenido de nuevo!",
                loginH3: "Encantado de verte de nuevo",
                loginP: "YourSportz, la aplicación dinámica de fútbol, ​​ofrece una gran cantidad de beneficios para la salud y el estilo de vida. Profundicemos en cómo puede mejorar tu bienestar.",
                loginH4: "Acceso",
                loginFormEmail: "¡Bienvenido de nuevo!",
                loginFormPassword: "¡Bienvenido de nuevo!",
                loginFormEmailPlaceholder: "Introduce tu correo electrónico",
                loginFormPasswordPlaceholder: "Contraseña",
                loginFormKeep: "Mantenme conectado",
                loginFormForgotPassword: "¿Has olvidado tu contraseña?",
                loginFormAgreeLeft: "Estoy de acuerdo con la",
                loginFormAgreeRight: "Termino del servicio y política de privacidad",
                loginFormLoginLoading: "Cargando...",
                loginFormLoginBtn: "Acceso",
                loginFormBottomP: "¿No tienes una cuenta?",
                loginFormRegister: "Registro",


                // register form
                registerBackBtn: "Regresa",
                registerH1: "¡Bienvenido de nuevo!",
                registerH4: "Encantado de verte de nuevo",
                registerP: "YourSportz, la aplicación dinámica de fútbol, ​​ofrece una gran cantidad de beneficios para la salud y el estilo de vida. Profundicemos en cómo puede mejorar tu bienestar.",
                registerToggleGeneral: "General",
                registerToggleSchool: "Escuela / corporativo",
                registerFormName: "Nombre completo",
                registerFormInstit: "Institución",
                registerFormComp: "Compañía",
                registerFormAdd: "DIRECCIÓN",
                registerFormEmail: "Correo electrónico",
                registerFormPassword: "Contraseña",
                registerFormConfirmPassword: "confirmar Contraseña",
                registerFormAgree: "Acepto los Términos de servicio y la Política de privacidad",
                registerFormLoading: "Cargando...",
                registerFormRegister: "Registro",
                registerFormAlready: "¿Ya tienes una cuenta?",
                registerFormLogin: "Acceso",


                // forgot password
                forgetPasswordH3: "Contraseña olvidada",
                forgetPasswordP: "Ingrese la dirección de correo electrónico asociada con su cuenta.",
                forgetPasswordLoading: "Cargando...",
                forgetPasswordSubmit: "Entregar",
                forgetPasswordBack: "Atrás para iniciar sesión",
                
                 // Early Access page
                 earlyAccessH2SpamLeft: "Su",
                 earlyAccessH2SpamRight: "deportes",
                 earlyAccessH1: "¡Emocionado por el acceso temprano! Eche un vistazo antes del lanzamiento, explore funciones y dé forma al futuro de nuestras plataformas.",
                 earlyAccessH2: "Únase a la lista de espera ahora para obtener acceso temprano",
                 earlyAccessButton: "SOLICITAR ACCESO",
                 earlyAccessInputField: "Ingrese su número telefónico",


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
                matchesH2: "Pourquoi YourSportz se démarque",
                matchesContainerHeading: "est-ce que tu me connais",

                // index 1
                title1: "Interface intuitive de notation des matchs",
                desciption1: "Dirigez le score du jeu d'une seule touche à l'aide de notre application de buteur. Enregistrez avec précision les buts, les fautes et bien plus encore, avec une fonction « Annuler » pour les corrections. Simple, rapide et précis : soyez le marqueur définitif du jeu.",
                hoverTitle1: "Santé cardiovasculaire:",
                hoverDescription1: "Le mouvement constant dans le football (parcourant 8 à 11 kilomètres par match) maintient la fréquence cardiaque à un niveau élevé..",

                // index 2
                title2: "Commentaire du match en temps réel",
                desciption2: "Restez à jour avec chaque jeu. Notre fonction de commentaires en direct vous tient au courant avec des mises à jour minute par minute. Des actions clés aux décisions cruciales, ne manquez jamais un moment de l'action.",
                hoverTitle2: "Renforcement de la force",
                hoverDescription2: "Le football fait travailler tout le corps. La force du bas du corps est essentielle pour donner des coups de pied, sauter et se tordre, tandis que la force du haut du corps aide à protéger le ballon et la puissance globale.",

                // index 3
                title3: "Passez en direct : diffusez du football avec style",
                desciption3: "Élevez vos matchs de football sur la scène mondiale grâce à notre diffusion en direct avancée. Intégrez-vous sans effort à votre chaîne YouTube pour une exposition maximale, affichez des mises à jour dynamiques des scores et savourez les moments forts créés par l'IA des moments forts de votre jeu. Enflammez l'esprit du football et partagez chaque but et chaque gloire en direct avec votre public.",
                hoverTitle3: "Tonus musculaire et combustion des graisses:",
                hoverDescription3: "Le football sollicite à la fois les fibres musculaires à contraction lente et rapide, favorisant la masse musculaire et la perte de graisse. Les voies énergétiques aérobie-anaérobie contribuent à la combustion des calories.",

                // index 4
                title4: "Chaque jeu, chaque mot, dans votre langue",
                desciption4: "Embrassez l'excitation du sport dans votre langue avec notre application. Profitez de commentaires en direct, de mises à jour en temps réel et de tous les moments forts dans votre langue préférée. Éliminez les barrières linguistiques et connectez-vous au jeu comme jamais auparavant.",
                hoverTitle4: "Force mentale:",
                hoverDescription4: "Le football aiguise la concentration, la prise de décision et le travail d’équipe. Il favorise la discipline, l’engagement social et la confiance.",
                
                
                
                // devices section
                androidApp: "Application Android",
                iosApp: "Application iOS",


                // faq section
                faqh2: "Questions fréquemment posées",

                // id 1
                question1: "Quel est votre sport?",
                answer1: "YourSportz est une application de football tout-en-un, permettant la diffusion de matchs en HD, les scores en direct et le suivi des performances. Connectez-vous aux jeux et tournois locaux et suivez les meilleurs joueurs, le tout sur une seule plateforme dynamique.",

                // id 2
                question2: "YourSportz est-il une application de sports fantastiques ou de paris ??",
                answer2: "YourSportz est une application de football tout-en-un, permettant la diffusion de matchs en HD, les scores en direct et le suivi des performances. Connectez-vous aux jeux et tournois locaux et suivez les meilleurs joueurs, le tout sur une seule plateforme dynamique.",

                // id 3
                question3: "Puis-je suivre des équipes ou des joueurs de football locaux spécifiques sur YourSportz?",
                answer3: "YourSportz est une application de football tout-en-un, permettant la diffusion de matchs en HD, les scores en direct et le suivi des performances. Connectez-vous aux jeux et tournois locaux et suivez les meilleurs joueurs, le tout sur une seule plateforme dynamique.",

                // id 4
                question4: "La diffusion en direct est-elle disponible pour les matchs de football locaux sur YourSportz?",
                answer4: "YourSportz est une application de football tout-en-un, permettant la diffusion de matchs en HD, les scores en direct et le suivi des performances. Connectez-vous aux jeux et tournois locaux et suivez les meilleurs joueurs, le tout sur une seule plateforme dynamique.",

                // id 5
                question5: "Quelles fonctionnalités propose YourSportz?",
                answer5: "YourSportz est une application de football tout-en-un, permettant la diffusion de matchs en HD, les scores en direct et le suivi des performances. Connectez-vous aux jeux et tournois locaux et suivez les meilleurs joueurs, le tout sur une seule plateforme dynamique.",


                // footer section
                socialH2: "Sociale",
                    socialLi1: " E-mail",
                    socialLi2: " Instagram",
                    socialLi3: " Facebook",
                    socialLi4: " LinkedIn",
                    socialLi5: " Youtube",
                needH2: "Besoin d'aide",
                    needLi1: "Contactez-nous",
                    needLi2: "Tarifs",
                    needLi3: "FAQ",
                legalH2: "Légal",
                    legalLi1: "Conditions d'utilisation",
                    legalLi2: "politique de confidentialité",

                copyright: "yoursportz par Navrekh Technologies PVT LTD",


                // about us page
                aboutusRightH3: "Notre vision",
                aboutusRightP: "Donner du pouvoir aux athlètes passionnés YourSportz imagine un monde où chaque passionné de sport, quelle que soit la discipline qu'il a choisie, peut poursuivre sa passion avec un dévouement sans faille. Nous pensons que le sport transcende les frontières, les cultures et les origines, unissant les gens à travers des expériences et des réalisations partagées..",
                aboutusLeftH3: "Notre objectif",
                aboutusLeftP: "Libérer le potentiel sportif Notre objectif est de créer une plateforme sportive complète qui s'adresse aux individus dans divers sports et jeux. Voici comment nous prévoyons d’y parvenir :",
                
                
                aboutuslipspan1: "Intégration multisports: ",
                aboutuslip1: "YourSportz intégrera de manière transparente plusieurs sports et jeux, offrant ainsi un hub unifié pour les passionnés. Les utilisateurs peuvent basculer entre le suivi de leurs tirs de basket-ball, de leurs buts de football, de leurs services de tennis et bien plus encore, le tout au sein d'une seule application.",
                aboutuslipspan2: "Expérience personnalisée: ",
                aboutuslip2: "Nous comprenons que le parcours de chaque athlète est unique. YourSportz adaptera ses fonctionnalités pour répondre aux préférences individuelles. Des tableaux de bord personnalisés, des plans de formation et des analyses de performances permettront aux utilisateurs de définir et d'atteindre leurs objectifs.",
                aboutuslipspan3: "Statistiques complètes: ",
                aboutuslip3: "YourSportz sera un trésor de statistiques. Les utilisateurs peuvent suivre leurs mesures de performances, notamment les points marqués, la distance parcourue, la vitesse, la précision, etc. Que vous soyez un guerrier du week-end ou un athlète professionnel, notre application vous fournira des informations précieuses pour améliorer votre jeu..",
                aboutuslipspan4: "Communauté et défis: ",
                aboutuslip4: "Connecter les athlètes est au cœur de YourSportz. Les utilisateurs peuvent rejoindre des communautés, partager leurs réalisations et participer à des défis. Les compétitions amicales, les classements et les événements virtuels favoriseront la camaraderie et une saine compétition..",
                aboutuslipspan5: "Motivation et récompenses: ",
                aboutuslip5: "Nous croyons qu’il faut célébrer le progrès. Yoursportz motivera les utilisateurs à travers des réalisations, des badges et des jalons. Qu'il s'agisse d'atteindre un record personnel ou de relever un défi de remise en forme, notre application reconnaîtra et récompensera le dévouement..",
                aboutuslipspan6: "Accessible et inclusif: ",
                aboutuslip6: "Yoursportz se veut accessible à tous. Nous garantirons la compatibilité avec divers appareils, systèmes d’exploitation et niveaux de compétence. La prise en charge linguistique, les interfaces adaptatives et le prix abordable feront de Yoursportz un compagnon sportif mondial.",
            
            
                // contact us page
                contactUsH3: "### Nous sommes là pour vous aider!",
                contactUsP: "**tu as une question?** Nous aimons avoir de vos nouvelles! Que vous ayez une question sur nos services, que vous ayez besoin d'aide ou que vous élaboriez la prochaine grande idée et ayez besoin de conseils, notre équipe est à votre écoute..",
                
                formHeaderP: "Il suffit de remplir le formulaire ci-dessous, and we'll je reviens vers vous à la vitesse de l'éclair.",

                formName: "Nom et prénom",
                formPhone: "Numéro de téléphone",
                formEmail: "Identifiant de courrier électronique",
                formSub: "Sujet",
                formMsg: "Message",
                formTypeMsg: "Tapez votre message",
                formSubmitBtn: "Soumettre",


                // terms and conditons page
                termsH1: "Termes et conditions",

                termsTitle1: "Termes et conditions",
                    termsContent11: "L'application YourSportz interdit le contenu de nudité, de violence ou de pornographie ; les contrevenants seront bannis.",
                    termsContent12: "Les utilisateurs sont seuls responsables du contenu publié ; YourSportz se réserve le droit de supprimer le contenu inapproprié.",
                    termsContent13: "YourSportz n'est pas responsable des problèmes techniques ; une résolution rapide sera tentée.",
                    termsContent14: "Les conditions sont sujettes à changement ; les utilisateurs seront informés des mises à jour.",
                termsTitle2: "Politique en matière de cookies:",
                    termsContent21: "Les cookies améliorent l'expérience utilisateur en mémorisant les préférences.",
                    termsContent22: "Les types incluent les cookies essentiels, analytiques et publicitaires.",
                    termsContent23: "Les utilisateurs peuvent gérer les cookies dans les paramètres de l'application ; la désactivation peut affecter la fonctionnalité.",
                termsTitle3: "politique de confidentialité:",
                    termsContent31: "YourSportz collecte des données personnelles et d'utilisation pour les fonctionnalités et analyses de l'application.",
                    termsContent32: "Des mesures de sécurité des données sont mises en œuvre ; Les politiques de confidentialité des services tiers s'appliquent.",
                    termsContent33: "Des mises à jour des politiques peuvent avoir lieu périodiquement ; vérifiez la dernière version dans l'application.",
                termsTitle4: "Politique de confidentialité et de remboursement:",
                    termsContent41: "Les données des utilisateurs sont collectées à des fins de statistiques et d'informations, sécurisées par cryptage et conservées si nécessaire..",
                    termsContent42: "Les utilisateurs consentent à la collecte, à l'utilisation et à la conservation des données en utilisant l'application.",
                    termsContent43: "Les remboursements ne sont pas émis pour les transactions prépayées, sauf si les services sont défectueux ou requis par la loi..",
                termsTitle5: "Politique de remboursement de l'application YourSportz:",
                    termsContent51: "Les transactions prépayées ne sont pas remboursables une fois les services utilisés.",
                    termsContent52: "Les remboursements peuvent être envisagés pour les services défectueux dans les 7 jours suivant l'utilisation.",
                    termsContent53: "Les obligations légales peuvent nécessiter des remboursements conformément aux lois ou réglementations applicables.",

                termLeftP: "Pour toute assistance, contactez notre service client @ yoursportz.in.",
                termLeftH4: "Merci d'avoir choisi YourSportz!", 
            

                // privacy policy page
                privacyH1: "politique de confidentialité",

                privacyTitle1: "Politique en matière de cookies:",
                    privacyContent11: "Les cookies améliorent l'expérience utilisateur en mémorisant les préférences",
                    privacyContent12: "Les types incluent les cookies essentiels, analytiques et publicitaires.",
                    privacyContent13: "Les utilisateurs peuvent gérer les cookies dans les paramètres de l'application ; la désactivation peut affecter la fonctionnalité.",
                privacyTitle2: "politique de confidentialité:",
                    privacyContent21: "YourSportz collecte des données personnelles et d'utilisation pour les fonctionnalités et analyses de l'application.",
                    privacyContent22: "Des mesures de sécurité des données sont mises en œuvre ; Les politiques de confidentialité des services tiers s'appliquent.",
                    privacyContent23: "Des mises à jour des politiques peuvent avoir lieu périodiquement ; vérifiez la dernière version dans l'application.",
                privacyTitle3: "Politique de confidentialité et de remboursement:",
                    privacyContent31: "Les données des utilisateurs sont collectées à des fins de statistiques et d'informations, sécurisées par cryptage et conservées si nécessaire.",
                    privacyContent32: "Les utilisateurs consentent à la collecte, à l'utilisation et à la conservation des données en utilisant l'application.",
                    privacyContent33: "Les remboursements ne sont pas émis pour les transactions prépayées, sauf si les services sont défectueux ou requis par la loi..",

                privacyLeftP: "Pour toute assistance, contactez notre service client @ yoursportz.in.",
                privacyLeftH4: "Merci d'avoir choisi YourSportz!", 
            

                // pricing page
                pricingH1: "Choisissez un forfait qui vous convient",
                pricingP: "Service de paiement au fur et à mesure, annulez à tout moment.",
                pricingH4: "méthodes de payement",
                pricingbottomP: "Nous acceptons Visa, American Express, Mastercard, Paypal et Crypto",
                pricingToggelGeneral: "Générale",
                pricingToggelSchool: "École / Entreprise",
                pricingBtn: "Choisir",
                pricingSchoolPricingtag1: "6 mois",
                pricingSchoolPricingprice1: "25,000",
                pricingSchoolPricingpriceTag1: "Avec TPS",
                pricingSchoolPricingpriceDis1: "Par membre, par an",
                    pricingSchoolPricingsubtitle11: "Toutes les fonctionnalités",
                        pricingSchoolPricingsubDetails111: "Programmes d'adhésion",
                        pricingSchoolPricingsubDetails112: "Rabais de groupe",
                    pricingSchoolPricingsubtitle12: "Comprend 15 matchs en direct gratuits",
                    pricingSchoolPricingsubtitle13: "Accès anticipé au nouveau contenu",
                
                
                
                pricingSchoolPricingtag2: "par match en direct",
                pricingSchoolPricingprice2: "15,000",
                pricingSchoolPricingpriceTag2: "avec TPS",
                    pricingSchoolPricingsubtitle21: "Toutes les fonctionnalités",
                        pricingSchoolPricingsubDetails211: "Programmes d'adhésion",
                        pricingSchoolPricingsubDetails212: "Contenu exclusif",
                        pricingSchoolPricingsubDetails213: "Rabais de groupe",
                        pricingSchoolPricingsubDetails214: "Forfaits personnalisables",
                    pricingSchoolPricingsubtitle22: "Comprend 30 matchs en direct gratuits",
                    pricingSchoolPricingsubtitle23: "Assistance prioritaire",


                pricingGeneralPricingprice1: "Gratuit",
                    
                        pricingGeneralPricingsubDetails111: "Créations Tourment",
                        pricingGeneralPricingsubDetails112: "Regarder la partition",
                        pricingGeneralPricingsubDetails113: "Commencer le match",
                        pricingGeneralPricingsubDetails114: "Expérience sans publicité",


                pricingGeneralPricingtag2: "par match en direct",
                pricingGeneralPricingprice2: "149",
                pricingGeneralPricingpriceTag2: "avec TPS",
                    
                        pricingGeneralPricingsubDetails211: "Toutes les fonctionnalités",
                        pricingGeneralPricingsubDetails212: "Une clé de licence",
                        pricingGeneralPricingsubDetails213: "Plan d'abonnement annuel",
                        pricingGeneralPricingsubDetails214: "Assistance et mises à jour pendant un an",
                        pricingGeneralPricingsubDetails215: "Par mois sans publicité: ₹99",
                        pricingGeneralPricingsubDetails216: "6 abonnement d'un mois: ₹499",
                        pricingGeneralPricingsubDetails217: "12 abonnement d'un mois: ₹999",
                
                pricingGeneralPricingtag31: "2 appareils photo",
                pricingGeneralPricingta32: "populaire",
                pricingGeneralPricingprice3: "199",
                pricingGeneralPricingpriceTag3: "avec TPS",
                pricingGeneralPricingpriceDis3: "Par membre, par mois",
                    
                        pricingGeneralPricingsubDetails311: "Par mois sans publicité: ₹99",
                        pricingGeneralPricingsubDetails312: "6 abonnement d'un mois: ₹499",
                        pricingGeneralPricingsubDetails313: "12 abonnement d'un mois: ₹99",

                pricingGeneralPricingtag4: "4 appareils photo",
                pricingGeneralPricingprice4: "299",
                pricingGeneralPricingpriceTag4: "avec TPS",
                pricingGeneralPricingpriceDis4: "Par membre, par mois",
                    
                        pricingGeneralPricingsubDetails411: "Toutes les fonctionnalités",
                        pricingGeneralPricingsubDetails412: "Une clé de licence",
                        pricingGeneralPricingsubDetails413: "Plan d'abonnement annuel",
                        pricingGeneralPricingsubDetails414: "Support et mise à jour d'un an",
                        pricingGeneralPricingsubDetails415: "Par mois sans publicité: ₹99",
                        pricingGeneralPricingsubDetails416: "6 abonnement d'un mois: ₹499",
                        pricingGeneralPricingsubDetails417: "12 abonnement d'un mois: ₹999",
                    

                // login form
                loginBackBtn: "Retourner",
                loginH1: "Content de te revoir!",
                loginH3: "C'est un plaisir de vous revoir",
                loginP: "YourSportz, l'application de football dynamique, offre une multitude d'avantages en matière de santé et de style de vie. Voyons comment cela peut améliorer votre bien-être",
                loginH4: "Se connecter",
                loginFormEmail: "Content de te revoir!",
                loginFormPassword: "Content de te revoir!",
                loginFormEmailPlaceholder: "Entrer votre Email",
                loginFormPasswordPlaceholder: "Mot de passe",
                loginFormKeep: "Rester connecté",
                loginFormForgotPassword: "Mot de passe oublié?",
                loginFormAgreeLeft: "je suis d'accord avec le",
                loginFormAgreeRight: "Conditions d'utilisation et politique de confidentialité",
                loginFormLoginLoading: "Chargement...",
                loginFormLoginBtn: "Se connecter",
                loginFormBottomP: "Don't avoir un compte?",
                loginFormRegister: "Registre",


                // register form
                registerBackBtn: "Retourner",
                registerH1: "Content de te revoir!",
                registerH4: "C'est un plaisir de vous revoir",
                registerP: "YourSportz, l'application de football dynamique, offre une multitude d'avantages en matière de santé et de style de vie. Let&rsquo;s découvrez comment cela peut améliorer votre bien-être",
                registerToggleGeneral: "Général",
                registerToggleSchool: "École / Entreprise",
                registerFormName: "Nom et prénom",
                registerFormInstit: "Institution",
                registerFormComp: "Entreprise",
                registerFormAdd: "Adresse",
                registerFormEmail: "E-mail",
                registerFormPassword: "Mot de passe",
                registerFormConfirmPassword: "Confirmez le mot de passe",
                registerFormAgree: "J'accepte les conditions d'utilisation et la politique de confidentialité",
                registerFormLoading: "Chargement...",
                registerFormRegister: "Registre",
                registerFormAlready: "Vous avez déjà un compte?",
                registerFormLogin: "Se connecter",


                // forgot password
                forgetPasswordH3: "Mot de passe oublié",
                forgetPasswordP: "Saisissez l'adresse email associée à votre compte.",
                forgetPasswordLoading: "Chargement...",
                forgetPasswordSubmit: "Soumettre",
                forgetPasswordBack: "Retour connexion",
                
                 // Early Access page
                 earlyAccessH2SpamLeft: "Ton",
                 earlyAccessH2SpamRight: "Sportz",
                 earlyAccessH1: "J'ai hâte de pouvoir accéder en avant-première ! Obtenez un aperçu avant le lancement, explorez les fonctionnalités et façonnez l’avenir de nos plateformes.",
                 earlyAccessH2: "Rejoignez la liste d'attente maintenant pour obtenir un accès anticipé",
                 earlyAccessButton: "DEMANDE D'ACCÈS",
                 earlyAccessInputField: "Entrez votre numéro de téléphone",

            }
        },
        de:{
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
                matchesH2: "Warum sich YourSportz von anderen abhebt",
                matchesContainerHeading: "Wissen Sie",

                // index 1
                title1: "Intuitive Match-Scoring-Oberfläche",
                desciption1: "Steuern Sie den Spielstand mit einer einzigen Berührung mithilfe unserer Punktezähler-App. Protokollieren Sie Tore, Fouls und mehr genau, mit der Funktion „Rückgängig“ für Korrekturen. Einfach, schnell und präzise – seien Sie der ultimative Punktezähler des Spiels.",
                hoverTitle1: "Herz-Kreislauf-Gesundheit:",
                hoverDescription1: "Die ständige Bewegung beim Fußball – 8 bis 11 Kilometer pro Spiel zurückzulegen – hält den Puls hoch.",

                // index 2
                title2: "Spielkommentar in Echtzeit",
                desciption2: "Bleiben Sie bei jedem Spiel auf dem Laufenden. Unsere Live-Kommentarfunktion hält Sie mit minutengenauen Updates auf dem Laufenden. Verpassen Sie keinen einzigen Moment des Geschehens, von wichtigen Spielzügen bis hin zu entscheidenden Entscheidungen.",
                hoverTitle2: "Kraftaufbau",
                hoverDescription2: "Fußball trainiert den gesamten Körper. Die Kraft des Unterkörpers ist für das Treten, Springen und Drehen von entscheidender Bedeutung, während die Kraft des Oberkörpers dazu beiträgt, den Ball abzuschirmen und die Gesamtkraft zu erhöhen",

                // index 3
                title3: "Live gehen: Fußball mit Flair streamen",
                desciption3: "Bringen Sie Ihre Fußballspiele mit unserem fortschrittlichen Live-Streaming auf eine globale Bühne. Integrieren Sie mühelos Ihren YouTube-Kanal für maximale Präsenz, zeigen Sie dynamische Ergebnisaktualisierungen an und genießen Sie von der KI erstellte Highlights der Höhepunkte Ihres Spiels. Entfachen Sie den Fußballgeist und teilen Sie jedes Tor und jeden Erfolg live mit Ihrem Publikum.",
                hoverTitle3: "Muskeltonus und Fettverbrennung:",
                hoverDescription3: "Beim Fußball werden sowohl langsam als auch schnell zuckende Muskelfasern beansprucht, wodurch Muskelmasse und Fettabbau gefördert werden. Die aerob-anaeroben Energiepfade tragen zur Kalorienverbrennung bei.",

                // index 4
                title4: "Jedes Spiel, jedes Wort, in Ihrer Sprache",
                desciption4: "Erleben Sie mit unserer App die Spannung des Sports in Ihrer Sprache. Genießen Sie Live-Kommentare, Echtzeit-Updates und alle Highlights in Ihrer bevorzugten Sprache. Überwinde Sprachbarrieren und verbinde dich mit dem Spiel wie nie zuvor.",
                hoverTitle4: "Mentale Stärke:",
                hoverDescription4: "Fußball schärft Konzentration, Entscheidungsfindung und Teamarbeit. Es fördert Disziplin, soziales Engagement und Selbstvertrauen.",
                
                
                
                // devices section
                androidApp: "Android App",
                iosApp: "iOS-App",


                // faq section
                faqh2: "Häufig gestellte Fragen",

                // id 1
                question1: "Was ist YourSport?",
                answer1: "YourSportz ist eine All-in-One-Fußball-App, die HD-Spielstreaming, Live-Scoring und Leistungsverfolgung ermöglicht. Vernetzen Sie sich mit lokalen Spielen und Turnieren und folgen Sie Top-Spielern – alles auf einer dynamischen Plattform.",

                // id 2
                question2: "Ist YourSportz eine Fantasy-Sport- oder Wett-App??",
                answer2: "YourSportz ist eine All-in-One-Fußball-App, die HD-Spielstreaming, Live-Scoring und Leistungsverfolgung ermöglicht. Vernetzen Sie sich mit lokalen Spielen und Turnieren und folgen Sie Top-Spielern – alles auf einer dynamischen Plattform.",

                // id 3
                question3: "Kann ich bestimmten lokalen Fußballmannschaften oder Spielern auf YourSportz folgen??",
                answer3: "YourSportz ist eine All-in-One-Fußball-App, die HD-Spielstreaming, Live-Scoring und Leistungsverfolgung ermöglicht. Vernetzen Sie sich mit lokalen Spielen und Turnieren und folgen Sie Top-Spielern – alles auf einer dynamischen Plattform.",

                // id 4
                question4: "Ist Live-Streaming für lokale Fußballspiele auf YourSportz verfügbar??",
                answer4: "YourSportz ist eine All-in-One-Fußball-App, die HD-Spielstreaming, Live-Scoring und Leistungsverfolgung ermöglicht. Vernetzen Sie sich mit lokalen Spielen und Turnieren und folgen Sie Top-Spielern – alles auf einer dynamischen Plattform.",

                // id 5
                question5: "Welche Funktionen bietet YourSportz??",
                answer5: "YourSportz ist eine All-in-One-Fußball-App, die HD-Spielstreaming, Live-Scoring und Leistungsverfolgung ermöglicht. Vernetzen Sie sich mit lokalen Spielen und Turnieren und folgen Sie Top-Spielern – alles auf einer dynamischen Plattform.",


                // footer section
                socialH2: "Sozial",
                    socialLi1: " Email",
                    socialLi2: " Instagram",
                    socialLi3: " Facebook",
                    socialLi4: " LinkedIn",
                    socialLi5: " Youtube",
                needH2: "Brauchen Sie Hilfe",
                    needLi1: "Kontaktiere uns",
                    needLi2: "Preisgestaltung",
                    needLi3: "FAQ",
                legalH2: "Legal",
                    legalLi1: "Nutzungsbedingungen",
                    legalLi2: "Datenschutzrichtlinie",

                copyright: "yoursportz von Navrekh Technologies PVT LTD",


                // about us page
                aboutusRightH3: "Unsere Vision",
                aboutusRightP: "Leidenschaftliche Sportler stärken YourSportz stellt sich eine Welt vor, in der jeder Sportbegeisterte, unabhängig von der gewählten Disziplin, seiner Leidenschaft mit unerschütterlichem Engagement nachgehen kann. Wir glauben, dass Sport Grenzen, Kulturen und Hintergründe überschreitet und Menschen durch gemeinsame Erfahrungen und Erfolge verbindet.",
                aboutusLeftH3: "Unser Ziel",
                aboutusLeftP: "Sportliches Potenzial freisetzen Unser Ziel ist es, eine umfassende Sportplattform zu schaffen, die Einzelpersonen aus verschiedenen Sportarten und Spielen bedient. Hier erfahren Sie, wie wir dies erreichen wollen:",
                
                
                aboutuslipspan1: "Multisport-Integration: ",
                aboutuslip1: "YourSportz integriert nahtlos mehrere Sportarten und Spiele und bietet so einen einheitlichen Hub für Enthusiasten. Benutzer können zwischen der Verfolgung ihrer Basketballschläge, Fußballtore, Tennisaufschläge und mehr wechseln – alles in einer einzigen App.",
                aboutuslipspan2: "Personalisierte Erfahrung: ",
                aboutuslip2: "Wir verstehen, dass die Reise jedes Athleten einzigartig ist. YourSportz passt seine Funktionen an die individuellen Vorlieben an. Personalisierte Dashboards, Trainingspläne und Leistungsanalysen ermöglichen es Benutzern, ihre Ziele zu setzen und zu erreichen.",
                aboutuslipspan3: "Umfassende Statistiken: ",
                aboutuslip3: "YourSportz wird eine Fundgrube an Statistiken sein. Benutzer können ihre Leistungskennzahlen verfolgen, einschließlich erzielter Punkte, zurückgelegter Distanz, Geschwindigkeit, Genauigkeit und mehr. Egal, ob Sie ein Wochenendsportler oder ein Profisportler sind, unsere App liefert wertvolle Einblicke, um Ihr Spiel zu verbessern.",
                aboutuslipspan4: "Gemeinschaft und Herausforderungen: ",
                aboutuslip4: "Die Verbindung von Sportlern steht im Mittelpunkt von YourSportz. Benutzer können Communities beitreten, ihre Erfolge teilen und an Herausforderungen teilnehmen. Freundliche Wettbewerbe, Bestenlisten und virtuelle Veranstaltungen werden Kameradschaft und gesunden Wettbewerb fördern.",
                aboutuslipspan5: "Motivation und Belohnungen: ",
                aboutuslip5: "Wir glauben daran, den Fortschritt zu feiern. Yoursportz motiviert Benutzer durch Erfolge, Abzeichen und Meilensteine. Ganz gleich, ob es darum geht, eine persönliche Bestzeit zu erreichen oder eine Fitness-Herausforderung zu absolvieren, unsere App erkennt und belohnt Engagement.",
                aboutuslipspan6: "Zugänglich und inklusiv: ",
                aboutuslip6: "Yoursportz möchte für alle zugänglich sein. Wir stellen die Kompatibilität mit verschiedenen Geräten, Betriebssystemen und Kenntnisstufen sicher. Sprachunterstützung, adaptive Schnittstellen und Erschwinglichkeit machen Yoursportz zu einem globalen Sportbegleiter.",
            
            
                // contact us page
                contactUsH3: "### We're Hier um zu helfen!",
                contactUsP: "**Hast du eine Frage?** Wir freuen uns, von Ihnen zu hören! Egal, ob Sie eine Frage zu unseren Dienstleistungen haben, Hilfe benötigen oder an der nächsten großen Idee arbeiten und Rat benötigen, unser Team ist immer für Sie da.",
                
                formHeaderP: "Füllen Sie einfach das untenstehende Formular aus und wir werden uns blitzschnell bei Ihnen melden.",

                formName: "Vollständiger Name",
                formPhone: "Telefonnummer",
                formEmail: "E-Mail-ID",
                formSub: "Thema",
                formMsg: "Messege",
                formTypeMsg: "Geben Sie Ihre Nachricht ein",
                formSubmitBtn: "Einreichen",


                // terms and conditons page
                termsH1: "Geschäftsbedingungen",

                termsTitle1: "Allgemeine Geschäftsbedingungen",
                    termsContent11: "Die YourSportz-App verbietet Nacktheit, Gewalt oder pornografische Inhalte. Zuwiderhandlungen werden gesperrt.",
                    termsContent12: "Für die veröffentlichten Inhalte sind ausschließlich die Nutzer verantwortlich; YourSportz behält sich das Recht vor, unangemessene Inhalte zu entfernen.",
                    termsContent13: "YourSportz haftet nicht für technische Probleme; Es wird versucht, eine zeitnahe Lösung zu finden.",
                    termsContent14: "Die Bedingungen können sich ändern; Benutzer werden über Aktualisierungen benachrichtigt.",
                termsTitle2: "Cookie-Richtlinie:",
                    termsContent21: "Cookies verbessern das Benutzererlebnis, indem sie sich Präferenzen merken.",
                    termsContent22: "Zu den Typen gehören essentielle Cookies, Analyse-Cookies und Werbe-Cookies.",
                    termsContent23: "Benutzer können Cookies in den App-Einstellungen verwalten; Das Deaktivieren kann die Funktionalität beeinträchtigen.",
                termsTitle3: "Datenschutzrichtlinie:",
                    termsContent31: "YourSportz erhebt personenbezogene Daten und Nutzungsdaten für die Funktionalität und Analyse der App.",
                    termsContent32: "Datensicherheitsmaßnahmen werden umgesetzt; Es gelten die Datenschutzrichtlinien der Drittanbieter.",
                    termsContent33: "Richtlinienaktualisierungen können in regelmäßigen Abständen erfolgen. Überprüfen Sie die neueste Version in der App.",
                termsTitle4: "Datenschutz- und Rückerstattungsrichtlinie:",
                    termsContent41: "Benutzerdaten werden für Statistiken und Erkenntnisse gesammelt, durch Verschlüsselung gesichert und bei Bedarf aufbewahrt.",
                    termsContent42: "Der Nutzer stimmt der Datenerhebung, -nutzung und -speicherung durch die Nutzung der App zu.",
                    termsContent43: "Für Prepaid-Transaktionen werden keine Rückerstattungen gewährt, es sei denn, die Leistungen sind mangelhaft oder gesetzlich vorgeschrieben.",
                termsTitle5: "Rückerstattungsrichtlinie für die YourSportz-App:",
                    termsContent51: "Prepaid-Transaktionen sind nach Inanspruchnahme der Dienste nicht erstattungsfähig.",
                    termsContent52: "Für mangelhafte Leistungen kann innerhalb von 7 Tagen nach Nutzung eine Rückerstattung in Betracht gezogen werden.",
                    termsContent53: "Gesetzliche Verpflichtungen können Rückerstattungen gemäß den geltenden Gesetzen oder Vorschriften erforderlich machen",

                termLeftP: "Wenn Sie Hilfe benötigen, wenden Sie sich an unseren Kundensupport  @ yoursportz.in.",
                termLeftH4: "Vielen Dank, dass Sie sich für YourSportz entschieden haben!", 
            

                // privacy policy page
                privacyH1: "Datenschutzrichtlinie",

                privacyTitle1: "Cookie-Richtlinie:",
                    privacyContent11: "Cookies verbessern das Benutzererlebnis, indem sie sich Präferenzen merken",
                    privacyContent12: "Zu den Typen gehören essentielle Cookies, Analyse-Cookies und Werbe-Cookies.",
                    privacyContent13: "Benutzer können Cookies in den App-Einstellungen verwalten; Das Deaktivieren kann die Funktionalität beeinträchtigen.",
                privacyTitle2: "Datenschutzrichtliniey:",
                    privacyContent21: "YourSportz erhebt personenbezogene Daten und Nutzungsdaten für die Funktionalität und Analyse der App.",
                    privacyContent22: "Datensicherheitsmaßnahmen werden umgesetzt; Es gelten die Datenschutzrichtlinien der Drittanbieter.",
                    privacyContent23: "Richtlinienaktualisierungen können in regelmäßigen Abständen erfolgen. Überprüfen Sie die neueste Version in der App.",
                privacyTitle3: "Datenschutz- und Rückerstattungsrichtlinie:",
                    privacyContent31: "Benutzerdaten werden für Statistiken und Erkenntnisse gesammelt, durch Verschlüsselung gesichert und bei Bedarf aufbewahrt.",
                    privacyContent32: "Der Nutzer stimmt der Datenerhebung, -nutzung und -speicherung durch die Nutzung der App zu.",
                    privacyContent33: "Für Prepaid-Transaktionen werden keine Rückerstattungen gewährt, es sei denn, die Leistungen sind mangelhaft oder gesetzlich vorgeschrieben.",

                privacyLeftP: "Wenn Sie Hilfe benötigen, wenden Sie sich an unseren Kundensupport @ yoursportz.in.",
                privacyLeftH4: "Vielen Dank, dass Sie sich für YourSportz entschieden haben!", 
            

                // pricing page
                pricingH1: "Wählen Sie einen Plan, der zu Ihnen passt",
                pricingP: "Pay-as-you-go-Service, jederzeit kündbar.",
                pricingH4: "Zahlungsarten",
                pricingbottomP: "Wir akzeptieren Visa, American Express, Mastercard, Paypal und Crypto",
                pricingToggelGeneral: "Allgemein",
                pricingToggelSchool: "Schule / Unternehmen",
                pricingBtn: "Wählen",
                pricingSchoolPricingtag1: "6-Monate",
                pricingSchoolPricingprice1: "25,000",
                pricingSchoolPricingpriceTag1: "Mit GST",
                pricingSchoolPricingpriceDis1: "Pro Mitglied, pro Jahr",
                    pricingSchoolPricingsubtitle11: "Alle Features",
                        pricingSchoolPricingsubDetails111: "Membership Programs",
                        pricingSchoolPricingsubDetails112: "Gruppenrabatte",
                    pricingSchoolPricingsubtitle12: "Beinhaltet 15 kostenlose Live-Spiele",
                    pricingSchoolPricingsubtitle13: "Frühzeitiger Zugriff auf neue Inhalte",
                
                
                
                pricingSchoolPricingtag2: "pro Spiel Live-Streamu",
                pricingSchoolPricingprice2: "15,000",
                pricingSchoolPricingpriceTag2: "mit Mehrwertsteuer",
                    pricingSchoolPricingsubtitle21: "Alle Features",
                        pricingSchoolPricingsubDetails211: "Mitgliedschaftsprogramme",
                        pricingSchoolPricingsubDetails212: "Exklusiver Inhalt",
                        pricingSchoolPricingsubDetails213: "Gruppenrabatte",
                        pricingSchoolPricingsubDetails214: "Anpassbare Pakete",
                    pricingSchoolPricingsubtitle22: "Beinhaltet 30 kostenlose Live-Spiele",
                    pricingSchoolPricingsubtitle23: "Vorrangiger Support",


                pricingGeneralPricingprice1: "Frei",
                    
                        pricingGeneralPricingsubDetails111: "Tourment-Kreationen",
                        pricingGeneralPricingsubDetails112: "Partitur ansehen",
                        pricingGeneralPricingsubDetails113: "Spiel starten",
                        pricingGeneralPricingsubDetails114: "Werbefreies Erlebnis",


                pricingGeneralPricingtag2: "pro Spiel Live-Stream",
                pricingGeneralPricingprice2: "149",
                pricingGeneralPricingpriceTag2: "with GST",
                    
                        pricingGeneralPricingsubDetails211: "Alle Features",
                        pricingGeneralPricingsubDetails212: "Ein Lizenzschlüssel",
                        pricingGeneralPricingsubDetails213: "Jahresabonnementplan",
                        pricingGeneralPricingsubDetails214: "Ein Jahr Support und Updates",
                        pricingGeneralPricingsubDetails215: "Pro Monat werbefrei: ₹99",
                        pricingGeneralPricingsubDetails216: "6 Monatsabonnement: ₹499",
                        pricingGeneralPricingsubDetails217: "12 Monatsabonnement: ₹999",
                
                pricingGeneralPricingtag31: "2 Kameras",
                pricingGeneralPricingta32: "beliebt",
                pricingGeneralPricingprice3: "199",
                pricingGeneralPricingpriceTag3: "mit Mehrwertsteuer",
                pricingGeneralPricingpriceDis3: "Pro Mitglied, pro Monat",
                    
                        pricingGeneralPricingsubDetails311: "Pro Monat werbefrei: ₹99",
                        pricingGeneralPricingsubDetails312: "6 Monatsabonnement: ₹499",
                        pricingGeneralPricingsubDetails313: "12Monatsabonnement: ₹99",

                pricingGeneralPricingtag4: "4 Kameras",
                pricingGeneralPricingprice4: "299",
                pricingGeneralPricingpriceTag4: "mit Mehrwertsteuer",
                pricingGeneralPricingpriceDis4: "Pro Mitglied, pro Monat",
                    
                        pricingGeneralPricingsubDetails411: "Alle Features",
                        pricingGeneralPricingsubDetails412: "Ein Lizenzschlüssel",
                        pricingGeneralPricingsubDetails413: "Jahresabonnementplan",
                        pricingGeneralPricingsubDetails414: "Ein Jahr Support und Update",
                        pricingGeneralPricingsubDetails415: "Pro Monat werbefrei: ₹99",
                        pricingGeneralPricingsubDetails416: "6 Monatsabonnement: ₹499",
                        pricingGeneralPricingsubDetails417: "12 Monatsabonnement: ₹999",
                    

                // login form
                loginBackBtn: "Geh zurück",
                loginH1: "Willkommen zurück!",
                loginH3: "Schön dich wieder zu sehen",
                loginP: "YourSportz, die dynamische Fußball-App, bietet zahlreiche Vorteile für Gesundheit und Lebensstil. Lassen Sie uns untersuchen, wie es Ihr Wohlbefinden steigern kann",
                loginH4: "Anmeldung",
                loginFormEmail: "Email",
                loginFormPassword: "Passwort",
                loginFormEmailPlaceholder: "Geben sie ihre E-Mail Adresse ein",
                loginFormPasswordPlaceholder: "Passwort",
                loginFormKeep: "Eingeloggt bleiben",
                loginFormForgotPassword: "Passwort vergessen?",
                loginFormAgreeLeft: "Ich stimme dem zu",
                loginFormAgreeRight: "Nutzungsbedingungen und Datenschutzbestimmungen",
                loginFormLoginLoading: "Wird geladen...",
                loginFormLoginBtn: "Anmeldung",
                loginFormBottomP: "Sie haben kein Konto?",
                loginFormRegister: "Registrieren",


                // register form
                registerBackBtn: "Geh zurück",
                registerH1: "Willkommen zurück!",
                registerH4: "Schön dich wieder zu sehen",
                registerP: "YourSportz, die dynamische Fußball-App, bietet zahlreiche Vorteile für Gesundheit und Lebensstil. Lassen Sie uns untersuchen, wie es Ihr Wohlbefinden steigern kann",
                registerToggleGeneral: "Allgemein",
                registerToggleSchool: "Schule / Unternehmen",
                registerFormName: "Vollständiger Name",
                registerFormInstit: "Institution",
                registerFormComp: "Unternehmen",
                registerFormAdd: "Adresse",
                registerFormEmail: "Email",
                registerFormPassword: "Passwort",
                registerFormConfirmPassword: "Bestätige das Passwort",
                registerFormAgree: "Ich stimme den Nutzungsbedingungen und Datenschutzbestimmungen zu",
                registerFormLoading: "Wird geladen...",
                registerFormRegister: "Registrieren",
                registerFormAlready: "Sie haben bereits ein Konto?",
                registerFormLogin: "Anmeldung",


                // forgot password
                forgetPasswordH3: "Passwort vergessen",
                forgetPasswordP: "Geben Sie die mit Ihrem Konto verknüpfte E-Mail-Adresse ein.",
                forgetPasswordLoading: "Wird geladen...",
                forgetPasswordSubmit: "Einreichen",
                forgetPasswordBack: "Zurück zur Anmeldung",
                
                 // Early Access page
                 earlyAccessH2SpamLeft: "Dein",
                 earlyAccessH2SpamRight: "Sportz",
                 earlyAccessH1: "Sportz-Text: Ich freue mich auf den frühen Zugriff! Werfen Sie vor dem Start einen ersten Blick darauf, erkunden Sie die Funktionen und gestalten Sie die Zukunft unserer Plattformen.",
                 earlyAccessH2: "Tragen Sie sich jetzt auf die Warteliste ein, um den frühen Zugang zu erhalten",
                 earlyAccessButton: "ANFRAGE ZUGANG",
                 earlyAccessInputField: "Gib deine Telefonnummer ein",
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
                matchesH2: "YourSportz가 돋보이는 이유",
                matchesContainerHeading: "당신은 알고 있습니까?",

                // index 1
                title1: "직관적인 매치 스코어링 인터페이스",
                desciption1: "득점 앱을 사용하여 한 번의 터치로 게임 점수를 지시하세요. 수정을 위한 '실행 취소' 기능을 사용하여 골, 파울 등을 정확하게 기록합니다. 간단하고 신속하며 정확합니다. 게임의 최종 점수 기록원이 되세요.",
                hoverTitle1: "심혈관 건강:",
                hoverDescription1: "경기당 8~11km를 달리는 축구의 끊임없는 움직임으로 인해 심박수가 높아집니다.",

                // index 2
                title2: "실시간 경기 해설",
                desciption2: "모든 플레이에 대한 최신 정보를 받아보세요. 실시간 해설 기능을 통해 분 단위 업데이트를 계속 확인할 수 있습니다. 핵심 플레이부터 중요한 결정까지, 액션의 한 순간도 놓치지 마세요.",
                hoverTitle2: "근력 강화",
                hoverDescription2: "축구는 몸 전체에 작용합니다. 하체 근력은 발차기, 점프, 비틀기에 필수적이며, 상체 근력은 공을 보호하고 전체적인 파워를 보호하는 데 도움이 됩니다.",

                // index 3
                title3: "실시간 스트리밍: 재능 있는 축구 스트리밍",
                desciption3: "고급 라이브 스트리밍을 통해 축구 경기를 글로벌 무대로 끌어올리세요. YouTube 채널과 손쉽게 통합하여 노출을 극대화하고, 동적 점수 업데이트를 표시하고, AI가 제작한 게임 최고 순간의 하이라이트를 즐기세요. 축구 정신에 불을 붙이고 모든 목표와 영광을 청중과 실시간으로 공유하세요.",
                hoverTitle3: "근긴장도 및 지방 연소:",
                hoverDescription3: "축구는 느린 연축과 빠른 연축 근육 섬유를 모두 사용하여 근육량과 지방 감소를 촉진합니다. 유산소-무산소 에너지 경로는 칼로리 소모에 기여합니다.",

                // index 4
                title4: "모든 게임, 모든 단어를 귀하의 언어로",
                desciption4: "우리 앱을 통해 귀하의 언어로 스포츠의 즐거움을 느껴보세요. 실시간 해설, 실시간 업데이트, 모든 하이라이트를 선호하는 언어로 즐겨보세요. 언어 장벽을 허물고 이전과는 전혀 다른 방식으로 게임에 접속하세요.",
                hoverTitle4: "정신적 강인함:",
                hoverDescription4: "축구는 집중력, 의사결정, 팀워크를 강화합니다. 규율, 사회적 참여, 자신감을 키워줍니다.",
                
                
                
                // devices section
                androidApp: "안드로이드 앱",
                iosApp: "iOS 앱",


                // faq section
                faqh2: "자주 묻는 질문",

                // id 1
                question1: "당신의 스포츠는 무엇입니까?",
                answer1: "YourSportz는 HD 경기 스트리밍, 라이브 득점 및 성과 추적을 지원하는 올인원 축구 앱입니다. 하나의 동적 플랫폼에서 현지 게임 및 토너먼트에 참여하고 최고의 플레이어를 팔로우하세요.",

                // id 2
                question2: "YourSportz는 판타지 스포츠 또는 베팅 앱인가요??",
                answer2: "YourSportz는 HD 경기 스트리밍, 라이브 득점 및 성과 추적을 지원하는 올인원 축구 앱입니다. 하나의 동적 플랫폼에서 지역 게임 및 토너먼트에 참여하고 최고의 플레이어를 팔로우하세요..",

                // id 3
                question3: "YourSportz에서 특정 지역 축구팀이나 선수를 팔로우할 수 있나요??",
                answer3: "YourSportz는 HD 경기 스트리밍, 라이브 득점 및 성과 추적을 지원하는 올인원 축구 앱입니다. 하나의 동적 플랫폼에서 지역 게임 및 토너먼트에 참여하고 최고의 플레이어를 팔로우하세요.",

                // id 4
                question4: "YourSportz에서 지역 축구 경기를 실시간 스트리밍할 수 있나요?",
                답변4: "YourSportz는 HD 경기 스트리밍, 라이브 득점 및 성과 추적을 지원하는 올인원 축구 앱입니다. 하나의 동적 플랫폼에서 지역 게임 및 토너먼트에 연결하고 최고의 선수를 팔로우하세요.",

                // id 5
                question5: "YourSportz는 어떤 기능을 제공합니까?",
                answer5: "YourSportz는 HD 경기 스트리밍, 라이브 득점 및 성과 추적을 지원하는 올인원 축구 앱입니다. 하나의 동적 플랫폼에서 지역 게임 및 토너먼트에 참여하고 최고의 플레이어를 팔로우하세요.",


                // footer section
                socialH2: "사회의",
                    socialLi1: " 이메일",
                    socialLi2: " 인스 타 그램",
                    socialLi3: " 페이스북",
                    socialLi4: " 링크드인",
                    socialLi5: " 유튜브",
                needH2: "도움이 필요하다",
                    needLi1: "문의하기",
                    needLi2: "가격",
                    needLi3: "자주하는 질문",
                legalH2: "합법적인",
                    legalLi1: "이용약관",
                    legalLi2: "개인 정보 정책",

                copyright: "Navrekh Technologies PVT LTD의 yoursportz",


                // about us page
                aboutusRightH3: "우리의 비젼",
                aboutusRightP: "열정적인 운동선수에게 힘을 실어주기 YourSportz는 선택한 분야에 관계없이 모든 스포츠 애호가가 흔들리지 않는 헌신으로 열정을 추구할 수 있는 세상을 꿈꿉니다. 우리는 스포츠가 경계, 문화, 배경을 초월하여 공유된 경험과 성취를 통해 사람들을 하나로 묶어준다고 믿습니다.",
                aboutusLeftH3: "우리의 목표",
                aboutusLeftP: "운동 잠재력 발휘 우리의 목표는 다양한 스포츠와 게임 전반에 걸쳐 개인을 만족시키는 포괄적인 스포츠 플랫폼을 만드는 것입니다. 이를 달성하기 위한 계획은 다음과 같습니다:",
                
                
                aboutuslipspan1: "멀티스포츠 통합: ",
                aboutuslip1: "YourSportz는 여러 스포츠와 게임을 원활하게 통합하여 매니아를 위한 통합 허브를 제공합니다. 사용자는 단일 앱 내에서 농구 슛, 축구 목표, 테니스 서브 등의 추적 간 전환이 가능합니다.",
                aboutuslipspan2: "개인화된 경험: ",
                aboutuslip2: "우리는 각 선수의 여정이 독특하다는 것을 알고 있습니다. YourSportz는 개인의 선호도에 맞춰 기능을 맞춤화합니다. 개인화된 대시보드, 교육 계획 및 성과 분석을 통해 사용자는 목표를 설정하고 달성할 수 있습니다.",
                aboutuslipspan3: "종합적인 통계: ",
                aboutuslip3: "YourSportz는 통계의 보고가 될 것입니다. 사용자는 득점 점수, 이동 거리, 속도, 정확도 등을 포함한 성과 지표를 추적할 수 있습니다. 당신이 주말 전사이든 프로 운동선수이든, 우리 앱은 당신의 게임을 향상시키는 데 귀중한 통찰력을 제공할 것입니다..",
                aboutuslipspan4: "커뮤니티 및 과제: ",
                aboutuslip4: "운동선수를 연결하는 것이 YourSportz의 핵심입니다. 사용자는 커뮤니티에 가입하고, 자신의 성과를 공유하고, 도전에 참여할 수 있습니다. 우호적인 경쟁, 순위표 및 가상 이벤트는 동료애와 건전한 경쟁을 육성할 것입니다.",
                aboutuslipspan5: "동기부여와 보상: ",
                aboutuslip5: "우리는 발전을 축하하는 것이 중요하다고 믿습니다. Yoursportz는 성과, 배지 및 이정표를 통해 사용자에게 동기를 부여합니다. 개인 최고 기록을 달성하든 피트니스 챌린지를 완수하든 우리 앱은 헌신을 인정하고 보상합니다.",
                aboutuslipspan6: "접근성 및 포용성: ",
                aboutuslip6: "Yoursportz는 모두가 접근할 수 있는 것을 목표로 합니다. 다양한 기기, 운영체제, 기술 수준과의 호환성을 보장하겠습니다. 언어 지원, 적응형 인터페이스 및 경제성은 Yoursportz를 글로벌 스포츠 동반자로 만들 것입니다.",
            
            
                // contact us page
                contactUsH3: "### 우리가 도와드리겠습니다!",
                contactUsP: "**질문이 있으신가요?** 우리는 당신의 의견을 듣고 싶습니다! 당사 서비스에 대한 질문이 있거나, 도움이 필요하거나, 차세대 아이디어를 구상 중이거나 조언이 필요한 경우, 당사 팀은 귀를 기울이고 있습니다.",
                
                formHeaderP: "아래 양식을 작성해 주시면 매우 빠른 속도로 연락드리겠습니다.",

                formName: "이름",
                formPhone: "전화 번호",
                formEmail: "이메일 주소",
                formSub: "주제",
                formMsg: "메시지",
                formTypeMsg: "메시지를 입력하세요",
                formSubmitBtn: "제출하다",


                // terms and conditons page
                termsH1: "이용약관",

                termsTitle1: "용어 및 조건",
                    termsContent11: "YourSportz 앱은 과도한 노출, 폭력 또는 음란물 콘텐츠를 금지합니다. 위반자는 금지됩니다.",
                    termsContent12: "게시된 콘텐츠에 대한 책임은 전적으로 사용자에게 있습니다. YourSportz는 부적절한 콘텐츠를 삭제할 권리를 보유합니다.",
                    termsContent13: "YourSportz는 기술적인 문제에 대해 책임을 지지 않습니다. 신속한 해결이 시도될 것입니다.",
                    termsContent14: "약관은 변경될 수 있습니다. 사용자에게 업데이트 알림이 전송됩니다.",
                termsTitle2: "쿠키 정책:",
                    termsContent21: "쿠키는 기본 설정을 기억하여 사용자 경험을 향상시킵니다.",
                    termsContent22: "유형에는 필수, 분석 및 광고 쿠키가 포함됩니다.",
                    termsContent23: "사용자는 앱 설정에서 쿠키를 관리할 수 있습니다. 비활성화하면 기능에 영향을 미칠 수 있습니다.",
                termsTitle3: "개인 정보 정책:",
                    termsContent31: "YourSportz는 앱 기능 및 분석을 위해 개인 및 사용 데이터를 수집합니다.",
                    termsContent32: "데이터 보안 조치가 구현됩니다. 제3자 서비스의 개인정보 보호정책이 적용됩니다.",
                    termsContent33: "정책 업데이트는 주기적으로 발생할 수 있습니다. 앱에서 최신 버전을 확인하세요.",
                termsTitle4: "개인정보 보호 및 환불 정책:",
                    termsContent41: "사용자 데이터는 통계 및 통찰력을 위해 수집되고 암호화로 보호되며 필요에 따라 보관됩니다.",
                    termsContent42: "사용자는 앱을 사용하여 데이터 수집, 사용 및 보유에 동의합니다.",
                    termsContent43: "서비스에 결함이 있거나 법적으로 요구되지 않는 한 선불 거래에 대해서는 환불이 이루어지지 않습니다.",
                termsTitle5: "YourSportz 앱 환불 정책:",
                    termsContent51: "선불 거래는 서비스 이용 후 환불이 불가능합니다.",
                    termsContent52: "이용일로부터 7일 이내 서비스 불량에 대해서는 환불을 고려할 수 있습니다.",
                    termsContent53: "법적 의무로 인해 관련 법률 또는 규정에 따라 환불이 필요할 수 있습니다.",

                termLeftP: "도움이 필요하시면 고객지원팀에 문의하세요.  @ yoursportz.in.",
                termLeftH4: "YourSportz를 선택해 주셔서 감사합니다!", 
            

                // privacy policy page
                privacyH1: "개인 정보 정책",

                privacyTitle1: "쿠키 정책:",
                    privacyContent11: "쿠키는 기본 설정을 기억하여 사용자 경험을 향상시킵니다.",
                    privacyContent12: "유형에는 필수, 분석 및 광고 쿠키가 포함됩니다.",
                    privacyContent13: "사용자는 앱 설정에서 쿠키를 관리할 수 있습니다. 비활성화하면 기능에 영향을 줄 수 있습니다.",
                privacyTitle2: "개인 정보 정책:",
                    privacyContent21: "YourSportz는 앱 기능 및 분석을 위해 개인 및 사용 데이터를 수집합니다.s.",
                    privacyContent22: "데이터 보안 조치가 구현됩니다. 제3자 서비스의 개인정보 보호정책이 적용됩니다.",
                    privacyContent23: "정책 업데이트는 주기적으로 발생할 수 있습니다. 앱에서 최신 버전을 확인하세요.",
                privacyTitle3: "개인정보 보호 및 환불 정책:",
                    privacyContent31: "사용자 데이터는 통계 및 통찰력을 위해 수집되고 암호화로 보호되며 필요에 따라 보관됩니다.",
                    privacyContent32: "사용자는 앱을 사용하여 데이터 수집, 사용 및 보유에 동의합니다.",
                    privacyContent33: "서비스에 결함이 있거나 법적으로 요구되지 않는 한 선불 거래에 대해서는 환불이 이루어지지 않습니다.",

                privacyLeftP: "도움이 필요하시면 고객지원팀에 문의하세요. @ yoursportz.in.",
                privacyLeftH4: "YourSportz를 선택해 주셔서 감사합니다!", 
            

                // pricing page
                pricingH1: "귀하에게 딱 맞는 플랜을 선택하세요",
                pricingP: "종량제 서비스, 언제든지 취소 가능.",
                pricingH4: "결제 방법",
                pricingbottomP: "Visa, American Express, Mastercard, Paypal 및 Crypto를 사용할 수 있습니다.",
                pricingToggelGeneral: "일반적인",
                pricingToggelSchool: "학교 / 기업",
                pricingBtn: "선택하다",
                pricingSchoolPricingtag1: "6 개월",
                pricingSchoolPricingprice1: "25,000",
                pricingSchoolPricingpriceTag1: "GST 포함",
                pricingSchoolPricingpriceDis1: "회원별, 연간",
                    pricingSchoolPricingsubtitle11: "모든 기능",
                        pricingSchoolPricingsubDetails111: "멤버십 프로그램",
                        pricingSchoolPricingsubDetails112: "단체할인",
                    pricingSchoolPricingsubtitle12: "15개의 무료 라이브 매치 포함",
                    pricingSchoolPricingsubtitle13: "새로운 콘텐츠에 대한 조기 액세스",
                
                
                
                pricingSchoolPricingtag2: "경기당 실시간 스트리밍",
                pricingSchoolPricingprice2: "15,000",
                pricingSchoolPricingpriceTag2: "GST와 함께",
                    pricingSchoolPricingsubtitle21: "모든 기능",
                        pricingSchoolPricingsubDetails211: "멤버십 프로그램",
                        pricingSchoolPricingsubDetails212: "독점 콘텐츠",
                        pricingSchoolPricingsubDetails213: "단체할인",
                        pricingSchoolPricingsubDetails214: "맞춤형 패키지",
                    pricingSchoolPricingsubtitle22: "30개의 무료 라이브 매치 포함",
                    pricingSchoolPricingsubtitle23: "우선 지원",


                pricingGeneralPricingprice1: "무료",
                    
                        pricingGeneralPricingsubDetails111: "토너먼트 창작물",
                        pricingGeneralPricingsubDetails112: "시청 점수",
                        pricingGeneralPricingsubDetails113: "Start match",
                        pricingGeneralPricingsubDetails114: "광고 없는 경험",


                pricingGeneralPricingtag2: "경기당 실시간 스트리밍",
                pricingGeneralPricingprice2: "149",
                pricingGeneralPricingpriceTag2: "GST와 함께",
                    
                        pricingGeneralPricingsubDetails211: "모든 기능",
                        pricingGeneralPricingsubDetails212: "라이센스 키 1개",
                        pricingGeneralPricingsubDetails213: "연간 구독 계획",
                        pricingGeneralPricingsubDetails214: "1년 지원 및 업데이트",
                        pricingGeneralPricingsubDetails215: "매월 광고 없이: ₹99",
                        pricingGeneralPricingsubDetails216: "6 월간 구독: ₹499",
                        pricingGeneralPricingsubDetails217: "12 월간 구독: ₹999",
                
                pricingGeneralPricingta31: "2 카메라",
                pricingGeneralPricingta32: "인기 있는",
                pricingGeneralPricingprice3: "199",
                pricingGeneralPricingpriceTag3: "GST와 함께",
                pricingGeneralPricingpriceDis3: "회원별, 월별",
                    
                        pricingGeneralPricingsubDetails311: "매월 광고 없이: ₹99",
                        pricingGeneralPricingsubDetails312: "6 월간 구독: ₹499",
                        pricingGeneralPricingsubDetails313: "12 월간 구독: ₹99",

                pricingGeneralPricingta4: "4 카메라",
                pricingGeneralPricingprice4: "299",
                pricingGeneralPricingpriceTag4: "GST와 함께",
                pricingGeneralPricingpriceDis4: "회원별, 월별",
                    
                        pricingGeneralPricingsubDetails411: "모든 기능",
                        pricingGeneralPricingsubDetails412: "라이센스 키 1개",
                        pricingGeneralPricingsubDetails413: "연간 구독 계획",
                        pricingGeneralPricingsubDetails414: "1년 지원 및 업데이트",
                        pricingGeneralPricingsubDetails415: "매월 광고 없이: ₹99",
                        pricingGeneralPricingsubDetails416: "6 월간 구독: ₹499",
                        pricingGeneralPricingsubDetails417: "12 월간 구독: ₹999",
                    

                // login form
                loginBackBtn: "돌아가기",
                loginH1: "돌아온 것을 환영합니다!",
                loginH3: "다시 만나서 반갑다",
                loginP: "역동적인 축구 앱인 YourSportz는 다양한 건강 및 라이프스타일 혜택을 제공합니다. 그것이 당신의 웰빙을 어떻게 향상시킬 수 있는지 탐구해 봅시다.",
                loginH4: "로그인",
                loginFormEmail: "이메일",
                loginFormPassword: "비밀번호",
                loginFormEmailPlaceholder: "이메일을 입력하세요",
                loginFormPasswordPlaceholder: "비밀번호",
                loginFormKeep: "나를 로그인 유지",
                loginFormForgotPassword: "비밀번호를 잊으 셨나요?",
                loginFormAgreeLeft: "나는 동의 함",
                loginFormAgreeRight: "서비스 약관 및 개인정보 보호정책",
                loginFormLoginLoading: "로드 중...",
                loginFormLoginBtn: "로그인",
                loginFormBottomP: "계정이 없나요?",
                loginFormRegister: "등록하다",


                // register form
                registerBackBtn: "돌아가기",
                registerH1: "돌아온 것을 환영합니다!",
                registerH4: "다시 만나서 반갑다",
                registerP: "역동적인 축구 앱인 YourSportz는 다양한 건강 및 라이프스타일 혜택을 제공합니다. 그것이 당신의 웰빙을 어떻게 향상시킬 수 있는지 탐구해 봅시다.",
                registerToggleGeneral: "일반적인",
                registerToggleSchool: "학교 / 기업",
                registerFormName: "이름",
                registerFormInstit: "기관",
                registerFormComp: "회사",
                registerFormAdd: "주소",
                registerFormEmail: "이메일",
                registerFormPassword: "비밀번호",
                registerFormConfirmPassword: "비밀번호 확인",
                registerFormAgree: "서비스 약관 및 개인정보 보호정책에 동의합니다.",
                registerFormLoading: "로드 중...",
                registerFormRegister: "등록하다",
                registerFormAlready: "이미 계정이 있나요?",
                registerFormLogin: "로그인",


                // forgot password
                forgetPasswordH3: "비밀번호 분실",
                forgetPasswordP: "귀하의 계정과 연결된 이메일 주소를 입력하세요.",
                forgetPasswordLoading: "로드 중...",
                forgetPasswordSubmit: "제출하다",
                forgetPasswordBack: "로그인으로 돌아가기",
                
                // Early Access page
                earlyAccessH2SpamLeft: "당신의",
                earlyAccessH2SpamRight: "스포츠",
                earlyAccessH1: "얼리 액세스가 기대됩니다! 출시 전에 미리 살펴보고, 기능을 살펴보고, 플랫폼의 미래를 만들어 보세요.",
                earlyAccessH2: "지금 대기자 명단에 등록하여 조기 액세스를 받으세요",
                earlyAccessButton: "액세스 요청",
                earlyAccessInputField: "전화번호를 입력하세요",
            }
        },
    }
})