"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode
} from "react";

type Language = "en" | "hi" | "pa" | "gu" | "ta";

type Dictionary = Record<string, string>;

const dictionaries: Record<Language, Dictionary> = {
  en: {
    "header.email": "Email steelbabanews@gmail.com",
    "header.call": "Call +91 7888696401",
    "header.login": "Login",
    "header.signup": "Sign Up",
    "header.selectLanguage": "Select Language",
    "header.contact": "Contact Us",
    "nav.segments": "Segments",
    "nav.products": "Products",
    "nav.steelPrice": "Steel Price",
    "nav.about": "About Us",
    "nav.applications": "Applications",
    "nav.buy": "Buy",
    "nav.news": "News",
    "nav.blogs": "Blogs",
    "nav.media": "Media",
    "hero.badge": "Live Steel Market",
    "hero.title": "Latest Steel Price Today Per Kg in India | Current Steel Rates",
    "hero.description":
      "Stay updated with professional steel pricing insights, current market movements, and product-wise comparisons built for businesses, distributors, and buyers across India.",
    "hero.ctaRates": "Check Steel Rates",
    "hero.ctaContact": "Contact Us",
    "pricing.title": "Professional pricing table with filters and quick trend reading",
    "pricing.description":
      "Search products, filter by city, sort rates up or down, and switch between item-wise and state-wise views with clear color indicators.",
    "news.title": "News",
    "faq.badge": "Support Center",
    "faq.title": "Frequently Asked Questions About Using The Steel Price",
    "faq.enquiry": "Enquiry",
    "faq.enquiryDescription": "Please complete this form with basic information you need.",
    "faq.submit": "Submit",
    "footer.about":
      "Steel Baba is a leading digital platform for steel price tracking in India, built to help buyers, distributors, contractors, and businesses stay updated with the latest city-wise steel rates. Our platform focuses on accurate market visibility, trend tracking, and fast access to pricing insights so users can make smarter purchase decisions. Steel Baba delivers reliable updates, market movement coverage, and business-friendly tools in one place.",
    "footer.platform": "Steel Baba Platform",
    "footer.platformDescription":
      "Steel Baba provides daily steel rate updates, market trend visibility, and reliable pricing information for businesses and buyers across India through one focused digital platform.",
    "footer.helpLine": "Customer Help Line:",
    "footer.subscribe": "Get the latest news and Updates",
    "footer.subscribeButton": "Subscribe",
    "auth.loginTitle": "Welcome back to Steel Baba",
    "auth.signupTitle": "Get started with Steel Baba",
    "auth.loginDescription":
      "Access steel pricing, market insights, alerts, and your personalized dashboard through a secure login experience.",
    "auth.signupDescription":
      "Register to receive real-time and futures market updates for steel, metals, agriculture, raw material, and related sectors.",
    "auth.loginEmail": "Login with Email",
    "auth.mobileOtp": "Mobile OTP",
    "auth.passwordLogin": "Password Login",
    "auth.createAccount": "Create Account",
    "auth.fullName": "Full Name",
    "auth.mobileNumber": "Mobile Number",
    "auth.businessType": "Business Type",
    "auth.businessName": "Business Name",
    "auth.address": "Address",
    "auth.emailAddress": "Email Address",
    "auth.password": "Password",
    "auth.createPassword": "Create Password",
    "auth.otp": "OTP",
    "auth.rememberMe": "Remember me",
    "auth.forgotPassword": "Forgot password?",
    "auth.loginButton": "Login",
    "auth.verifyLogin": "Verify and Login",
    "auth.verifyContinue": "Verify and Continue",
    "auth.createAccountButton": "Create Account",
    "auth.newToBalaji": "New to Steel Baba?",
    "auth.alreadyAccount": "Already have an account?",
    "forgot.title": "Reset your account access securely",
    "forgot.description":
      "Enter your registered email address or mobile number. We will send password reset instructions or a secure verification code to continue.",
    "forgot.button": "Send Recovery Link",
    "forgot.back": "Back to Login"
  },
  hi: {
    "header.email": "ईमेल steelbabanews@gmail.com",
    "header.call": "कॉल +91 7888696401",
    "header.login": "लॉगिन",
    "header.signup": "साइन अप",
    "header.selectLanguage": "भाषा चुनें",
    "header.contact": "संपर्क करें",
    "nav.segments": "सेगमेंट्स",
    "nav.products": "प्रोडक्ट्स",
    "nav.steelPrice": "स्टील प्राइस",
    "nav.about": "हमारे बारे में",
    "nav.applications": "एप्लिकेशन्स",
    "nav.buy": "खरीदें",
    "nav.news": "न्यूज़",
    "nav.blogs": "ब्लॉग्स",
    "nav.media": "मीडिया",
    "hero.badge": "लाइव स्टील मार्केट",
    "hero.title": "आज भारत में प्रति किलो स्टील की ताज़ा कीमत | वर्तमान स्टील रेट",
    "hero.description":
      "भारत भर के व्यवसायों, वितरकों और खरीदारों के लिए प्रोफेशनल स्टील प्राइसिंग इनसाइट्स, मार्केट मूवमेंट और प्रोडक्ट-वाइज तुलना प्राप्त करें।",
    "hero.ctaRates": "स्टील रेट देखें",
    "hero.ctaContact": "संपर्क करें",
    "pricing.title": "फ़िल्टर और ट्रेंड रीडिंग के साथ प्रोफेशनल प्राइसिंग टेबल",
    "pricing.description":
      "प्रोडक्ट खोजें, शहर के अनुसार फ़िल्टर करें, रेट्स को ऊपर या नीचे क्रम में देखें और आइटम-वाइज या स्टेट-वाइज व्यू के बीच स्विच करें।",
    "news.title": "न्यूज़",
    "faq.badge": "सपोर्ट सेंटर",
    "faq.title": "स्टील प्राइस उपयोग करने से जुड़े अक्सर पूछे जाने वाले प्रश्न",
    "faq.enquiry": "पूछताछ",
    "faq.enquiryDescription": "कृपया अपनी आवश्यक जानकारी के साथ यह फ़ॉर्म भरें।",
    "faq.submit": "सबमिट करें",
    "footer.about":
      "बालाजी स्टील भारत में स्टील प्राइस ट्रैकिंग के लिए एक अग्रणी डिजिटल प्लेटफॉर्म है, जो खरीदारों, डिस्ट्रीब्यूटर्स, कॉन्ट्रैक्टर्स और व्यवसायों को शहरवार स्टील रेट्स की ताज़ा जानकारी उपलब्ध कराता है। हमारा प्लेटफॉर्म सटीक मार्केट विज़िबिलिटी, ट्रेंड ट्रैकिंग और तेज़ प्राइस इनसाइट्स पर केंद्रित है ताकि उपयोगकर्ता बेहतर निर्णय ले सकें।",
    "footer.platform": "बालाजी स्टील प्लेटफॉर्म",
    "footer.platformDescription":
      "बालाजी स्टील भारत भर के व्यवसायों और खरीदारों के लिए दैनिक स्टील रेट अपडेट, मार्केट ट्रेंड विज़िबिलिटी और भरोसेमंद प्राइसिंग जानकारी प्रदान करता है।",
    "footer.helpLine": "कस्टमर हेल्प लाइन:",
    "footer.subscribe": "ताज़ा समाचार और अपडेट प्राप्त करें",
    "footer.subscribeButton": "सब्सक्राइब करें",
    "auth.loginTitle": "बालाजी स्टील में आपका स्वागत है",
    "auth.signupTitle": "बालाजी स्टील के साथ शुरुआत करें",
    "auth.loginDescription":
      "सुरक्षित लॉगिन अनुभव के साथ स्टील प्राइसिंग, मार्केट इनसाइट्स, अलर्ट्स और अपने डैशबोर्ड तक पहुंचें।",
    "auth.signupDescription":
      "स्टील, मेटल्स, एग्रीकल्चर, रॉ मटेरियल और संबंधित सेक्टर्स के रियल-टाइम और फ्यूचर मार्केट अपडेट प्राप्त करने के लिए रजिस्टर करें।",
    "auth.loginEmail": "ईमेल से लॉगिन",
    "auth.mobileOtp": "मोबाइल ओटीपी",
    "auth.passwordLogin": "पासवर्ड लॉगिन",
    "auth.createAccount": "अकाउंट बनाएं",
    "auth.fullName": "पूरा नाम",
    "auth.mobileNumber": "मोबाइल नंबर",
    "auth.businessType": "व्यवसाय प्रकार",
    "auth.businessName": "व्यवसाय का नाम",
    "auth.address": "पता",
    "auth.emailAddress": "ईमेल पता",
    "auth.password": "पासवर्ड",
    "auth.createPassword": "पासवर्ड बनाएं",
    "auth.otp": "ओटीपी",
    "auth.rememberMe": "मुझे याद रखें",
    "auth.forgotPassword": "पासवर्ड भूल गए?",
    "auth.loginButton": "लॉगिन",
    "auth.verifyLogin": "सत्यापित करें और लॉगिन करें",
    "auth.verifyContinue": "सत्यापित करें और आगे बढ़ें",
    "auth.createAccountButton": "अकाउंट बनाएं",
    "auth.newToBalaji": "क्या आप बालाजी स्टील में नए हैं?",
    "auth.alreadyAccount": "क्या आपके पास पहले से अकाउंट है?",
    "forgot.title": "अपने अकाउंट की पहुँच सुरक्षित रूप से रीसेट करें",
    "forgot.description":
      "अपना रजिस्टर्ड ईमेल पता या मोबाइल नंबर दर्ज करें। आगे बढ़ने के लिए हम पासवर्ड रीसेट निर्देश या सुरक्षित वेरिफिकेशन कोड भेजेंगे।",
    "forgot.button": "रिकवरी लिंक भेजें",
    "forgot.back": "लॉगिन पर वापस जाएँ"
  },
  pa: {
    "header.email": "ਈਮੇਲ steelbabanews@gmail.com",
    "header.call": "ਕਾਲ +91 7888696401",
    "header.login": "ਲਾਗਇਨ",
    "header.signup": "ਸਾਈਨ ਅੱਪ",
    "header.selectLanguage": "ਭਾਸ਼ਾ ਚੁਣੋ",
    "header.contact": "ਸੰਪਰਕ ਕਰੋ",
    "nav.segments": "ਸੈਗਮੈਂਟਸ",
    "nav.products": "ਉਤਪਾਦ",
    "nav.steelPrice": "ਸਟੀਲ ਕੀਮਤ",
    "nav.about": "ਸਾਡੇ ਬਾਰੇ",
    "nav.applications": "ਐਪਲੀਕੇਸ਼ਨਜ਼",
    "nav.buy": "ਖਰੀਦੋ",
    "nav.news": "ਖ਼ਬਰਾਂ",
    "nav.blogs": "ਬਲੌਗ",
    "nav.media": "ਮੀਡੀਆ",
    "hero.badge": "ਲਾਈਵ ਸਟੀਲ ਮਾਰਕੀਟ",
    "hero.title": "ਅੱਜ ਭਾਰਤ ਵਿੱਚ ਪ੍ਰਤੀ ਕਿਲੋ ਸਟੀਲ ਦੀ ਨਵੀਂ ਕੀਮਤ | ਮੌਜੂਦਾ ਸਟੀਲ ਰੇਟ",
    "hero.description":
      "ਭਾਰਤ ਭਰ ਦੇ ਵਪਾਰਾਂ, ਡਿਸਟ੍ਰੀਬਿਊਟਰਾਂ ਅਤੇ ਖਰੀਦਦਾਰਾਂ ਲਈ ਪ੍ਰੋਫੈਸ਼ਨਲ ਸਟੀਲ ਕੀਮਤ ਜਾਣਕਾਰੀ, ਮਾਰਕੀਟ ਮੂਵਮੈਂਟ ਅਤੇ ਉਤਪਾਦ ਅਧਾਰਿਤ ਤੁਲਨਾ ਪ੍ਰਾਪਤ ਕਰੋ।",
    "hero.ctaRates": "ਸਟੀਲ ਰੇਟ ਵੇਖੋ",
    "hero.ctaContact": "ਸੰਪਰਕ ਕਰੋ",
    "pricing.title": "ਫਿਲਟਰ ਅਤੇ ਟ੍ਰੈਂਡ ਰੀਡਿੰਗ ਨਾਲ ਪ੍ਰੋਫੈਸ਼ਨਲ ਪ੍ਰਾਇਸਿੰਗ ਟੇਬਲ",
    "pricing.description":
      "ਉਤਪਾਦ ਖੋਜੋ, ਸ਼ਹਿਰ ਅਨੁਸਾਰ ਫਿਲਟਰ ਕਰੋ, ਰੇਟ ਉੱਪਰ ਜਾਂ ਹੇਠਾਂ ਕ੍ਰਮ ਵਿੱਚ ਵੇਖੋ ਅਤੇ ਵੱਖ-ਵੱਖ ਵਿਊਜ਼ ਵਿੱਚ ਬਦਲੋ।",
    "news.title": "ਖ਼ਬਰਾਂ",
    "faq.badge": "ਸਪੋਰਟ ਸੈਂਟਰ",
    "faq.title": "ਸਟੀਲ ਕੀਮਤ ਵਰਤੋਂ ਬਾਰੇ ਅਕਸਰ ਪੁੱਛੇ ਜਾਣ ਵਾਲੇ ਸਵਾਲ",
    "faq.enquiry": "ਪੁੱਛਗਿੱਛ",
    "faq.enquiryDescription": "ਕਿਰਪਾ ਕਰਕੇ ਆਪਣੀ ਲੋੜੀਂਦੀ ਜਾਣਕਾਰੀ ਨਾਲ ਇਹ ਫਾਰਮ ਭਰੋ।",
    "faq.submit": "ਜਮ੍ਹਾਂ ਕਰੋ",
    "footer.about":
      "ਬਾਲਾਜੀ ਸਟੀਲ ਭਾਰਤ ਵਿੱਚ ਸਟੀਲ ਕੀਮਤ ਟ੍ਰੈਕਿੰਗ ਲਈ ਇੱਕ ਅਗੇਤੀ ਡਿਜ਼ਿਟਲ ਪਲੇਟਫਾਰਮ ਹੈ, ਜੋ ਖਰੀਦਦਾਰਾਂ, ਡਿਸਟ੍ਰੀਬਿਊਟਰਾਂ, ਠੇਕੇਦਾਰਾਂ ਅਤੇ ਵਪਾਰਾਂ ਨੂੰ ਸ਼ਹਿਰ-ਵਾਰ ਸਟੀਲ ਰੇਟਾਂ ਦੀ ਨਵੀਂ ਜਾਣਕਾਰੀ ਦਿੰਦਾ ਹੈ।",
    "footer.platform": "ਬਾਲਾਜੀ ਸਟੀਲ ਪਲੇਟਫਾਰਮ",
    "footer.platformDescription":
      "ਬਾਲਾਜੀ ਸਟੀਲ ਭਾਰਤ ਭਰ ਦੇ ਵਪਾਰਾਂ ਅਤੇ ਖਰੀਦਦਾਰਾਂ ਲਈ ਰੋਜ਼ਾਨਾ ਸਟੀਲ ਰੇਟ ਅੱਪਡੇਟ ਅਤੇ ਮਾਰਕੀਟ ਜਾਣਕਾਰੀ ਪ੍ਰਦਾਨ ਕਰਦਾ ਹੈ।",
    "footer.helpLine": "ਗ੍ਰਾਹਕ ਸਹਾਇਤਾ ਲਾਈਨ:",
    "footer.subscribe": "ਤਾਜ਼ਾ ਖ਼ਬਰਾਂ ਅਤੇ ਅੱਪਡੇਟ ਪ੍ਰਾਪਤ ਕਰੋ",
    "footer.subscribeButton": "ਸਬਸਕ੍ਰਾਈਬ ਕਰੋ",
    "auth.loginTitle": "ਬਾਲਾਜੀ ਸਟੀਲ ਵਿੱਚ ਤੁਹਾਡਾ ਸਵਾਗਤ ਹੈ",
    "auth.signupTitle": "ਬਾਲਾਜੀ ਸਟੀਲ ਨਾਲ ਸ਼ੁਰੂਆਤ ਕਰੋ",
    "auth.loginDescription":
      "ਸੁਰੱਖਿਅਤ ਲਾਗਇਨ ਅਨੁਭਵ ਰਾਹੀਂ ਸਟੀਲ ਕੀਮਤ, ਮਾਰਕੀਟ ਜਾਣਕਾਰੀ ਅਤੇ ਆਪਣੇ ਡੈਸ਼ਬੋਰਡ ਤੱਕ ਪਹੁੰਚੋ।",
    "auth.signupDescription":
      "ਸਟੀਲ, ਮੈਟਲ, ਖੇਤੀਬਾੜੀ ਅਤੇ ਕਮੋਡੀਟੀ ਮਾਰਕੀਟ ਅੱਪਡੇਟ ਲਈ ਰਜਿਸਟਰ ਕਰੋ।",
    "auth.loginEmail": "ਈਮੇਲ ਨਾਲ ਲਾਗਇਨ",
    "auth.mobileOtp": "ਮੋਬਾਈਲ ਓਟੀਪੀ",
    "auth.passwordLogin": "ਪਾਸਵਰਡ ਲਾਗਇਨ",
    "auth.createAccount": "ਖਾਤਾ ਬਣਾਓ",
    "auth.fullName": "ਪੂਰਾ ਨਾਮ",
    "auth.mobileNumber": "ਮੋਬਾਈਲ ਨੰਬਰ",
    "auth.businessType": "ਵਪਾਰ ਕਿਸਮ",
    "auth.businessName": "ਵਪਾਰ ਦਾ ਨਾਮ",
    "auth.address": "ਪਤਾ",
    "auth.emailAddress": "ਈਮੇਲ ਪਤਾ",
    "auth.password": "ਪਾਸਵਰਡ",
    "auth.createPassword": "ਪਾਸਵਰਡ ਬਣਾਓ",
    "auth.otp": "ਓਟੀਪੀ",
    "auth.rememberMe": "ਮੈਨੂੰ ਯਾਦ ਰੱਖੋ",
    "auth.forgotPassword": "ਪਾਸਵਰਡ ਭੁੱਲ ਗਏ?",
    "auth.loginButton": "ਲਾਗਇਨ",
    "auth.verifyLogin": "ਪੜਤਾਲ ਕਰੋ ਅਤੇ ਲਾਗਇਨ ਕਰੋ",
    "auth.verifyContinue": "ਪੜਤਾਲ ਕਰੋ ਅਤੇ ਅੱਗੇ ਵਧੋ",
    "auth.createAccountButton": "ਖਾਤਾ ਬਣਾਓ",
    "auth.newToBalaji": "ਕੀ ਤੁਸੀਂ ਬਾਲਾਜੀ ਸਟੀਲ ਵਿੱਚ ਨਵੇਂ ਹੋ?",
    "auth.alreadyAccount": "ਕੀ ਤੁਹਾਡੇ ਕੋਲ ਪਹਿਲਾਂ ਹੀ ਖਾਤਾ ਹੈ?",
    "forgot.title": "ਆਪਣੇ ਖਾਤੇ ਦੀ ਪਹੁੰਚ ਸੁਰੱਖਿਅਤ ਤਰੀਕੇ ਨਾਲ ਰੀਸੈਟ ਕਰੋ",
    "forgot.description":
      "ਆਪਣਾ ਰਜਿਸਟਰਡ ਈਮੇਲ ਪਤਾ ਜਾਂ ਮੋਬਾਈਲ ਨੰਬਰ ਦਰਜ ਕਰੋ। ਅੱਗੇ ਵਧਣ ਲਈ ਅਸੀਂ ਰਿਕਵਰੀ ਲਿੰਕ ਜਾਂ ਕੋਡ ਭੇਜਾਂਗੇ।",
    "forgot.button": "ਰਿਕਵਰੀ ਲਿੰਕ ਭੇਜੋ",
    "forgot.back": "ਲਾਗਇਨ ਤੇ ਵਾਪਸ ਜਾਓ"
  },
  gu: {
    "header.email": "ઇમેઇલ steelbabanews@gmail.com",
    "header.call": "કૉલ +91 7888696401",
    "header.login": "લોગિન",
    "header.signup": "સાઇન અપ",
    "header.selectLanguage": "ભાષા પસંદ કરો",
    "header.contact": "સંપર્ક કરો",
    "nav.segments": "સેગમેન્ટ્સ",
    "nav.products": "પ્રોડક્ટ્સ",
    "nav.steelPrice": "સ્ટીલ ભાવ",
    "nav.about": "અમારા વિશે",
    "nav.applications": "એપ્લિકેશન્સ",
    "nav.buy": "ખરીદો",
    "nav.news": "સમાચાર",
    "nav.blogs": "બ્લોગ્સ",
    "nav.media": "મીડિયા",
    "hero.badge": "લાઇવ સ્ટીલ માર્કેટ",
    "hero.title": "આજે ભારતમા પ્રતિ કિલો સ્ટીલનો તાજો ભાવ | હાલના સ્ટીલ રેટ",
    "hero.description":
      "ભારતભરના વ્યવસાયો, વિતરકો અને ખરીદદારો માટે વ્યાવસાયિક સ્ટીલ પ્રાઇસિંગ, માર્કેટ મૂવમેન્ટ અને પ્રોડક્ટ-વાઇઝ સરખામણી મેળવો.",
    "hero.ctaRates": "સ્ટીલ રેટ જુઓ",
    "hero.ctaContact": "સંપર્ક કરો",
    "pricing.title": "ફિલ્ટર અને ટ્રેન્ડ વાંચન સાથે વ્યાવસાયિક પ્રાઇસિંગ ટેબલ",
    "pricing.description":
      "પ્રોડક્ટ શોધો, શહેર પ્રમાણે ફિલ્ટર કરો, રેટ્સને ઉપર કે નીચે ક્રમમાં જુઓ અને અલગ વ્યૂ વચ્ચે સ્વિચ કરો.",
    "news.title": "સમાચાર",
    "faq.badge": "સપોર્ટ સેન્ટર",
    "faq.title": "સ્ટીલ ભાવ ઉપયોગ વિશે વારંવાર પૂછાતા પ્રશ્નો",
    "faq.enquiry": "પૂછપરછ",
    "faq.enquiryDescription": "કૃપા કરીને તમારી જરૂરિયાત મુજબની માહિતી સાથે આ ફોર્મ ભરો.",
    "faq.submit": "સબમિટ કરો",
    "footer.about":
      "બાલાજી સ્ટીલ ભારતનું અગ્રણી ડિજિટલ પ્લેટફોર્મ છે, જે શહેરવાર સ્ટીલ રેટ, માર્કેટ વિઝિબિલિટી અને ઝડપી પ્રાઇસ ઇનસાઇટ્સ પ્રદાન કરે છે.",
    "footer.platform": "બાલાજી સ્ટીલ પ્લેટફોર્મ",
    "footer.platformDescription":
      "બાલાજી સ્ટીલ ભારતભરના વ્યવસાયો અને ખરીદદારો માટે દૈનિક સ્ટીલ રેટ અપડેટ્સ અને વિશ્વસનીય માહિતી પૂરી પાડે છે.",
    "footer.helpLine": "કસ્ટમર હેલ્પ લાઇન:",
    "footer.subscribe": "તાજા સમાચાર અને અપડેટ્સ મેળવો",
    "footer.subscribeButton": "સબસ્ક્રાઇબ કરો",
    "auth.loginTitle": "બાલાજી સ્ટીલમાં ફરી સ્વાગત છે",
    "auth.signupTitle": "બાલાજી સ્ટીલ સાથે શરૂઆત કરો",
    "auth.loginDescription":
      "સુરક્ષિત લોગિન અનુભવ સાથે સ્ટીલ ભાવ, માર્કેટ ઇનસાઇટ્સ અને તમારા ડેશબોર્ડ સુધી પહોંચો.",
    "auth.signupDescription":
      "સ્ટીલ, મેટલ, કૃષિ અને સંબંધિત માર્કેટ અપડેટ્સ મેળવવા માટે રજિસ્ટર કરો.",
    "auth.loginEmail": "ઇમેઇલથી લોગિન",
    "auth.mobileOtp": "મોબાઇલ ઓટીપી",
    "auth.passwordLogin": "પાસવર્ડ લોગિન",
    "auth.createAccount": "એકાઉન્ટ બનાવો",
    "auth.fullName": "પૂરું નામ",
    "auth.mobileNumber": "મોબાઇલ નંબર",
    "auth.businessType": "વ્યવસાય પ્રકાર",
    "auth.businessName": "વ્યવસાયનું નામ",
    "auth.address": "સરનામું",
    "auth.emailAddress": "ઇમેઇલ સરનામું",
    "auth.password": "પાસવર્ડ",
    "auth.createPassword": "પાસવર્ડ બનાવો",
    "auth.otp": "ઓટીપી",
    "auth.rememberMe": "મને યાદ રાખો",
    "auth.forgotPassword": "પાસવર્ડ ભૂલી ગયા?",
    "auth.loginButton": "લોગિન",
    "auth.verifyLogin": "ચકાસો અને લોગિન કરો",
    "auth.verifyContinue": "ચકાસો અને આગળ વધો",
    "auth.createAccountButton": "એકાઉન્ટ બનાવો",
    "auth.newToBalaji": "શું તમે બાલાજી સ્ટીલમાં નવા છો?",
    "auth.alreadyAccount": "શું તમારું પહેલેથી એકાઉન્ટ છે?",
    "forgot.title": "તમારા એકાઉન્ટ ઍક્સેસને સુરક્ષિત રીતે રીસેટ કરો",
    "forgot.description":
      "તમારું રજીસ્ટર્ડ ઇમેઇલ અથવા મોબાઇલ નંબર દાખલ કરો. આગળ વધવા માટે અમે રિકવરી લિંક અથવા કોડ મોકલીશું.",
    "forgot.button": "રિકવરી લિંક મોકલો",
    "forgot.back": "લોગિન પર પાછા જાઓ"
  },
  ta: {
    "header.email": "மின்னஞ்சல் steelbabanews@gmail.com",
    "header.call": "அழைக்கவும் +91 7888696401",
    "header.login": "உள்நுழை",
    "header.signup": "பதிவு செய்க",
    "header.selectLanguage": "மொழியைத் தேர்ந்தெடுக்கவும்",
    "header.contact": "தொடர்பு கொள்ளவும்",
    "nav.segments": "பிரிவுகள்",
    "nav.products": "தயாரிப்புகள்",
    "nav.steelPrice": "ஸ்டீல் விலை",
    "nav.about": "எங்களை பற்றி",
    "nav.applications": "பயன்பாடுகள்",
    "nav.buy": "வாங்க",
    "nav.news": "செய்திகள்",
    "nav.blogs": "ப்ளாக்ஸ்",
    "nav.media": "மீடியா",
    "hero.badge": "நேரடி ஸ்டீல் சந்தை",
    "hero.title": "இந்தியாவில் இன்று கிலோக்கு ஸ்டீல் புதிய விலை | தற்போதைய ஸ்டீல் விகிதங்கள்",
    "hero.description":
      "இந்தியா முழுவதும் உள்ள வணிகங்கள், விநியோகஸ்தர்கள் மற்றும் வாங்குபவர்களுக்கான தொழில்முறை ஸ்டீல் விலைத் தகவல்கள் மற்றும் சந்தை நகர்வுகளைப் பெறுங்கள்.",
    "hero.ctaRates": "ஸ்டீல் விகிதங்களை பார்க்கவும்",
    "hero.ctaContact": "தொடர்பு கொள்ளவும்",
    "pricing.title": "வடிப்பான்கள் மற்றும் ட்ரெண்ட் வாசிப்புடன் தொழில்முறை விலை அட்டவணை",
    "pricing.description":
      "தயாரிப்புகளை தேடுங்கள், நகரம் வாரியாக வடிகட்டி, விலைகளை வரிசைப்படுத்தி, பல்வேறு பார்வைகளுக்கு மாறுங்கள்.",
    "news.title": "செய்திகள்",
    "faq.badge": "ஆதரவு மையம்",
    "faq.title": "ஸ்டீல் விலையைப் பயன்படுத்துவது குறித்த அடிக்கடி கேட்கப்படும் கேள்விகள்",
    "faq.enquiry": "விசாரணை",
    "faq.enquiryDescription": "தயவுசெய்து தேவையான தகவல்களுடன் இந்த படிவத்தை நிரப்பவும்.",
    "faq.submit": "சமர்ப்பிக்கவும்",
    "footer.about":
      "பாலாஜி ஸ்டீல் இந்தியாவில் ஸ்டீல் விலை கண்காணிப்பிற்கான முன்னணி டிஜிட்டல் தளம் ஆகும். நகர வாரியான ஸ்டீல் விலை மற்றும் சந்தை தகவல்களை நம்பகமாக வழங்குகிறது.",
    "footer.platform": "பாலாஜி ஸ்டீல் தளம்",
    "footer.platformDescription":
      "பாலாஜி ஸ்டீல் இந்தியா முழுவதும் உள்ள வணிகங்கள் மற்றும் வாங்குபவர்களுக்கு தினசரி ஸ்டீல் விலைப் புதுப்பிப்புகளை வழங்குகிறது.",
    "footer.helpLine": "வாடிக்கையாளர் உதவி எண்:",
    "footer.subscribe": "சமீபத்திய செய்திகள் மற்றும் புதுப்பிப்புகளைப் பெறுங்கள்",
    "footer.subscribeButton": "சந்தாதாரராகுங்கள்",
    "auth.loginTitle": "பாலாஜி ஸ்டீலுக்கு மீண்டும் வரவேற்கிறோம்",
    "auth.signupTitle": "பாலாஜி ஸ்டீலுடன் தொடங்குங்கள்",
    "auth.loginDescription":
      "பாதுகாப்பான உள்நுழைவு மூலம் ஸ்டீல் விலை, சந்தை தகவல்கள் மற்றும் உங்கள் டாஷ்போர்டை அணுகுங்கள்.",
    "auth.signupDescription":
      "ஸ்டீல், மெட்டல், வேளாண்மை மற்றும் தொடர்புடைய சந்தை புதுப்பிப்புகளுக்காக பதிவு செய்யுங்கள்.",
    "auth.loginEmail": "மின்னஞ்சல் மூலம் உள்நுழை",
    "auth.mobileOtp": "மொபைல் OTP",
    "auth.passwordLogin": "கடவுச்சொல் உள்நுழைவு",
    "auth.createAccount": "கணக்கு உருவாக்கவும்",
    "auth.fullName": "முழுப் பெயர்",
    "auth.mobileNumber": "மொபைல் எண்",
    "auth.businessType": "வணிக வகை",
    "auth.businessName": "வணிக பெயர்",
    "auth.address": "முகவரி",
    "auth.emailAddress": "மின்னஞ்சல் முகவரி",
    "auth.password": "கடவுச்சொல்",
    "auth.createPassword": "கடவுச்சொல் உருவாக்கவும்",
    "auth.otp": "OTP",
    "auth.rememberMe": "என்னை நினைவில் கொள்ளவும்",
    "auth.forgotPassword": "கடவுச்சொல்லை மறந்துவிட்டீர்களா?",
    "auth.loginButton": "உள்நுழை",
    "auth.verifyLogin": "சரிபார்த்து உள்நுழை",
    "auth.verifyContinue": "சரிபார்த்து தொடரவும்",
    "auth.createAccountButton": "கணக்கு உருவாக்கவும்",
    "auth.newToBalaji": "பாலாஜி ஸ்டீலில் புதியவரா?",
    "auth.alreadyAccount": "உங்களிடம் ஏற்கனவே கணக்கு உள்ளதா?",
    "forgot.title": "உங்கள் கணக்கு அணுகலை பாதுகாப்பாக மீட்டமைக்கவும்",
    "forgot.description":
      "உங்கள் பதிவு செய்யப்பட்ட மின்னஞ்சல் அல்லது மொபைல் எண்ணை உள்ளிடவும். தொடர நாங்கள் மீட்பு இணைப்பு அல்லது குறியீட்டை அனுப்புவோம்.",
    "forgot.button": "மீட்பு இணைப்பை அனுப்பவும்",
    "forgot.back": "உள்நுழைவுக்கு திரும்பவும்"
  }
};

type ContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<ContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem("balaji-language") as Language | null;

    if (savedLanguage) {
      setLanguageState(savedLanguage);
      document.documentElement.lang = savedLanguage;
    }
  }, []);

  function setLanguage(nextLanguage: Language) {
    setLanguageState(nextLanguage);
    window.localStorage.setItem("balaji-language", nextLanguage);
    document.documentElement.lang = nextLanguage;
  }

  const value = useMemo<ContextValue>(
    () => ({
      language,
      setLanguage,
      t: (key: string) => dictionaries[language]?.[key] || dictionaries.en[key] || key
    }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return context;
}
