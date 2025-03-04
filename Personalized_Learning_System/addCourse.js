const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

const courses = [
    {
        category: "Programming",
        description: "Java Programming for Beginners",
        difficulty: "Beginner",
        duration: "4hrs",
        image: "https://www.simplilearn.com/ice9/app/C-Programming-Basics-Kick-start-your-programming-career.jpg",
        provider: "Simplilearn",
        title: "Java Programming for Beginners",
        url: "https://www.simplilearn.com/free-java-beginners-course-skillup?tag=programming",
    },
    {
        category: "Programming",
        description: "Object-Oriented Programming in Java Programming",
        difficulty: "Intermediate",
        duration: "2hrs",
        image: "https://www.simplilearn.com/ice9/app/OOPs-in-Java-Programming.jpg",
        provider: "Simplilearn",
        title: "OOPs in Java Programming",
        url: "https://www.simplilearn.com/free-java-object-oriented-programming-course-skillup?tag=programming",
    },
    {
        category: "Programming",
        description: "Java Spring Framework fundamentals",
        difficulty: "Intermediate",
        duration: "3hrs",
        image: "https://cdn01.alison-static.net/courses/5664/alison_courseware_intro_5664.jpg",
        provider: "simplilearn",
        title: "Inroduction to Java Spring Framework",
        url: "https://www.simplilearn.com/introduction-to-java-spring-framework-fundamentals-skillup?tag=java%20programming",
    },
    {
        category: "Programming",
        description: "Advanced Swift Programming for IOS",
        difficulty: "Advanced",
        duration: "4hrs",
        imageUrl: "https://cdn01.alison-static.net/courses/1640/alison_courseware_intro_1640.jpg",
        provider: "Alison",
        title: "Beginner in Advanced Swift Programming for IOS",
        url: "https://alison.com/course/introduction-to-advanced-swift-programming-for-ios",
    },
    {
        category: "Programming",
        description: "Dart Programming for App Development",
        difficulty: "Advanced",
        duration: "3hrs",
        imageUrl: "https://cdn01.alison-static.net/courses/4407/alison_courseware_intro_4407.jpg",
        provider: "Alison",
        title: "App Development using Dart Programming language", 
        url: "https://alison.com/course/app-development-using-dart-programming-language",
    },
    {
        category: "Programming",
        description: "Master PLC Programming",
        difficulty: "Advanced",
        duration: "6hrs",
        imageUrl: "https://cdn01.alison-static.net/courses/3691/alison_courseware_intro_3691.jpg",
        provider: "Alison",
        title: "Master PLC Programming", 
        url: "https://alison.com/course/master-plc-programming",
    },
    {
        category: "Data Science",
        description: "Python Programming for Data Science",
        difficulty: "Beginner",
        duration: "10hrs",
        imageUrl: "https://d3f1iyfxxz8i1e.cloudfront.net/courses/course_image_variant/8d7a49ae4457_w240.webp",
        provider: "University of California San Diego via edx",
        title: "Python for Data Science", 
        url: "https://www.classcentral.com/course/python-the-university-of-california-san-diego-pyt-8209",
    },
    {
        category: "Data Science",
        description: "Basic Tools for Data Science",
        difficulty: "Beginner",
        duration: "17hrs",
        imageUrl: "https://d3f1iyfxxz8i1e.cloudfront.net/courses/course_image_variant/ea23eee2761e_w240.webp",
        provider: "John Hopkins University via Coursera",
        title: "The Data Scientist’s Toolbox",   
        url: "https://www.classcentral.com/course/datascitoolbox-1712",
    },
    {
        category: "Data Science",
        description: "Basic ways data can be obtained",
        difficulty: "Intermediate",
        duration: "20hrs",
        imageUrl: "https://d3f1iyfxxz8i1e.cloudfront.net/courses/course_image_variant/7841679b4121_w240.webp",
        provider: "John Hopkins University via Coursera",
        title: "Getting and Cleaning Data",   
        url: "https://www.classcentral.com/course/getdata-1714",
    },
    {
        category: "Data Science",
        description: "Mastering Data Analysis",
        difficulty: "Intermediate",
        duration: "23hrs",
        imageUrl: "https://d3f1iyfxxz8i1e.cloudfront.net/courses/course_image_variant/9fc1c330ac95_w480.webp",
        provider: "Duke University via Coursera",
        title: "Mastering Data Analysis in Excel",   
        url: "https://www.classcentral.com/course/analytics-excel-4310",
    },
    {
        category: "Data Science",
        description: "Data Science in Real Life",
        difficulty: "Intermediate",
        duration: "7hrs",
        imageUrl: "https://d3f1iyfxxz8i1e.cloudfront.net/courses/course_image_variant/cac2c3439ff0_w480.webp",
        provider: "John Hopkins University via Coursera",
        title: "Data Science in Real Life",   
        url: "https://www.classcentral.com/course/real-life-data-science-4389",
    },
    {
        category: "Data Science",
        description: "Capstone project class",
        difficulty: "Advanced",
        duration: "6hrs",
        imageUrl: "https://d3f1iyfxxz8i1e.cloudfront.net/courses/course_image_variant/c1259f840ecd_w240.webp",
        provider: "John Hopkins University via Coursera",
        title: "Data Science capstone",   
        url: "https://www.classcentral.com/course/data-science-project-2791",
    },
    {
        category: "Data Science",
        description: "Apply data analytics techniques for real world socital problems",
        difficulty: "Advanced",
        duration: "8hrs",
        imageUrl: "https://d3f1iyfxxz8i1e.cloudfront.net/courses/course_image_variant/50e03e6cec85_w480.webp",
        provider: "Weseleyan University via Coursera",
        title: "Data Analysis and Interpretation capstone",   
        url: "https://www.classcentral.com/course/data-analysis-capstone-5110",
    },
    {
        category: "Data Science",
        description: "Data Science with scala",
        difficulty: "Advanced",
        duration: "6hrs",
        imageUrl: "https://d3f1iyfxxz8i1e.cloudfront.net/courses/course_image_variant/0f8c37abe4af_w480.webp",
        provider: "Cognitive Class",
        title: "Data Science with Scala",   
        url: "https://www.classcentral.com/course/cognitive-class-data-science-with-scala-118529",
    },
    {
        category: "Computer Graphics",
        description: "Rendering and GRaphics basics",
        difficulty: "Beginner",
        duration: "3hrs",
        imageUrl: "https://d3f1iyfxxz8i1e.cloudfront.net/courses/course_image_variant/8e7a0fb2d56a_w240.webp",
        provider: "Class Central",
        title: "Rendering and graphics",   
        url: "https://www.classcentral.com/classroom/youtube-rendering-graphics-90462",
    },
    {
        category: "Computer Graphics",
        description: "User Interfanc and User Experience basics",
        difficulty: "Beginner",
        duration: "1hr",
        imageUrl: "https://www.simplilearn.com/ice9/app/amongus_1.jpg",
        provider: "Simplilearn",
        title: "UI/UX basics",   
        url: "https://www.simplilearn.com/free-graphic-design-beginner-course-skillup?tag=graphics",
    },
    {
        category: "Computer Graphics",
        description: "one-stop solution for creating a C# GUI",
        difficulty: "Beginner",
        duration: "6hrs",
        imageUrl: "https://i.ytimg.com/vi/UMc1HLyBHSQ/hqdefault.jpg",
        provider: "Simplilearn",
        title: "C# GUI",   
        url: "https://www.simplilearn.com/tutorials/c-sharp-tutorial/c-sharp-gui?tag=graphics",
    },
    {
        category: "Computer Graphics",
        description: "Build a modern UI using Chakara UI",
        difficulty: "Intermediate",
        duration: "43mins",
        imageUrl: "https://d3f1iyfxxz8i1e.cloudfront.net/courses/course_image_variant/854147438e71_w480.webp",
        provider: "Class Central",
        title: "Build a modern UI using Chakara UI",   
        url: "https://www.classcentral.com/course/egghead-io-build-a-modern-user-interface-with-chakra-ui-118425",
    },
    {
        category: "Computer Graphics",
        description: "Graphics Design",
        difficulty: "Intermediate",
        duration: "30hrs",
        imageUrl: "https://i.ytimg.com/vi/UMc1HLyBHSQ/hqdefault.jpg",
        provider: "Udemy",
        title: "Graphics Design Master Class",   
        url: "https://www.udemy.com/course/graphic-design-masterclass-everything-you-need-to-know/?couponCode=ST3MT200225A",
    },
    {
        category: "Computer Graphics",
        description: "User Experience Design Essentials - Adobe XD UI UX Design",
        difficulty: "Intermediate",
        duration: "10hrs",
        imageUrl: "https://i.ytimg.com/vi/UMc1HLyBHSQ/hqdefault.jpg",
        provider: "Udemi",
        title: "User Experience Design Essentials",   
        url: "https://www.udemy.com/course/ui-ux-web-design-using-adobe-xd/?couponCode=ST3MT200225A",
    },
    {
        category: "Computer Graphics",
        description: "Creating accessible website",
        difficulty: "Advanced",
        duration: "3hrs",
        imageUrl: "https://cdn01.alison-static.net/courses/2966/alison_courseware_intro_2966.jpg",
        provider: "Alison",
        title: "Web Accessibility Development",   
        url: "https://alison.com/course/web-accessibility-development",
    },
    {
        category: "Computer Graphics",
        description: "A complete guide to User Experience Design",
        difficulty: "Advanced",
        duration: "3hrs",
        imageUrl: "https://cdn01.alison-static.net/courses/3994/alison_courseware_intro_3994.jpg",
        provider: "Alison",
        title: "User Experience Design",   
        url: "https://alison.com/course/a-complete-guide-to-user-experience-design",
    },
    {
        category: "Computer Graphics",
        description: "UX interviews",
        difficulty: "Advanced",
        duration: "3hrs",
        imageUrl: "https://cdn01.alison-static.net/courses/3965/alison_courseware_intro_3965.jpg",
        provider: "Alison",
        title: "Nailing UX Interviews and Creating a Viable UX Design Career",   
        url: "https://alison.com/course/nailing-ux-interviews-and-creating-a-viable-ux-design-career",
    },
    {
        category: "Web Development",
        description: "WordPress Fundamentals - Content Management System",
        difficulty: "Beginner",
        duration: "3hrs",
        imageUrl: "https://cdn01.alison-static.net/courses/4478/alison_courseware_intro_4478.jpg",
        provider: "Alison",
        title: "WordPress Fundamentals - Content Management System",   
        url: "https://alison.com/course/wordpress-fundamentals-content-management-system-cms",
    },
    {
        category: "Web Development",
        description: "Responsive Website with HTML, CSS, and Javascript",
        difficulty: "Beginner",
        duration: "23hrs",
        imageUrl: "https://d3f1iyfxxz8i1e.cloudfront.net/courses/course_image_variant/ef2c7a3f8262_w480.webp",
        provider: "Class Central",
        title: "Responsive Website basics",   
        url: "https://www.classcentral.com/course/website-coding-4191",
    },
    {
        category: "Web Development",
        description: "Full Stack Development",
        difficulty: "Intermediate",
        duration: "7hrs",
        imageUrl: "https://d3f1iyfxxz8i1e.cloudfront.net/courses/course_image_variant/a701108cded6_w480.webp",
        provider: "Class Central",
        title: "Full Stack for Frontend Engineers",   
        url: "https://www.classcentral.com/course/frontend-masters-full-stack-for-front-end-engineers-v2-118021",
    },
    {
        category: "Web Development",
        description: "ASP.NET core",
        difficulty: "Intermediate",
        duration: "6hrs",
        imageUrl: "https://cdn01.alison-static.net/courses/3342/alison_courseware_intro_3342.jpg",
        provider: "Alison",
        title: "Exploring ASP.NET core",   
        url: "https://alison.com/course/exploring-asp-net-core-intermediate",
    },
    {
        category: "Web Development",
        description: "Laravel Advanced Topics",
        difficulty: "Intermediate",
        duration: "6hrs",
        imageUrl: "https://cdn01.alison-static.net/courses/7039/alison_courseware_intro_7039.jpg",
        provider: "Alison",
        title: "Laravel Advanced",   
        url: "https://alison.com/course/laravel-advanced-topics",
    },
    {
        category: "Web Development",
        description: "Modern React with Redux",
        difficulty: "Advanced",
        duration: "75hrs",
        imageUrl: "https://cdn01.alison-static.net/courses/7039/alison_courseware_intro_7039.jpg",
        provider: "Udemi",
        title: "Modern React with Redux",   
        url: "https://www.udemy.com/course/react-redux/?couponCode=ST3MT200225A",
    },
    {
        category: "Web Development",
        description: "Web Accessibility",
        difficulty: "Advanced",
        duration: "10hrs",
        imageUrl: "https://cdn01.alison-static.net/courses/2967/alison_courseware_intro_2967.jpg",
        provider: "Alison",
        title: "Web Accessibility",   
        url: "https://alison.com/course/diploma-in-web-accessibility",
    },
    {
        category: "Web Development",
        description: "Web Development with jQUery, AJAX, and JSON",
        difficulty: "Advanced",
        duration: "4hrs",
        imageUrl: "https://cdn01.alison-static.net/courses/4918/alison_courseware_intro_4918.jpg",
        provider: "Alison",
        title: "Web Development with jQUery, AJAX, and JSON",   
        url: "https://alison.com/course/web-development-with-jquery-ajax-and-json",
    },
    {
        category: "Computer Security",
        description: "Basics of Security Management",
        difficulty: "Beginner",
        duration: "3hrs",
        imageUrl: "https://cdn01.alison-static.net/courses/5689/alison_courseware_intro_5689.jpg",
        provider: "Alison",
        title: "Basics of Security Management",   
        url: "https://alison.com/course/basics-of-security-management",
    },
    {
        category: "Computer Security",
        description: "Introduction to cyber security",
        difficulty: "Beginner",
        duration: "12weeks",
        imageUrl: "https://d3f1iyfxxz8i1e.cloudfront.net/courses/course_image/69fb745426f2.jpg",
        provider: "Class Central",
        title: "Introduction to cyber security",   
        url: "https://www.classcentral.com/course/swayam-introduction-to-cyber-security-14116",
    },
    {
        category: "Computer Security",
        description: "Codes and Secrets: Fundamentals of Computer Security - A Public Engagement Lecture",
        difficulty: "Beginner",
        duration: "2hrs",
        imageUrl: "https://d3f1iyfxxz8i1e.cloudfront.net/courses/course_image_variant/195fa100f2c0_w240.webp",
        provider: "Class Central",
        title: "Fundamentals of computer security",   
        url: "https://www.classcentral.com/classroom/youtube-codes-and-secrets-a-public-engagement-event-hd-139301",
    },
    {
        category: "Computer Security",
        description: "Essentials of Information Security Risk Management",
        difficulty: "Intermediate",
        duration: "5hrs",
        imageUrl: "https://cdn01.alison-static.net/courses/7083/alison_courseware_intro_7083.jpg",
        provider: "Alison",
        title: "ISO 27005 - Essentials of Information Security Risk Management",   
        url: "https://alison.com/course/iso-27005-essentials-of-information-security-risk-management",
    },
    {
        category: "Computer Security",
        description: "Data Protection and Privacy Information Management",
        difficulty: "Intermediate",
        duration: "4hrs",
        imageUrl: "https://cdn01.alison-static.net/courses/7041/alison_courseware_intro_7041.jpg",
        provider: "Alison",
        title: "ISO 27701 - Data Protection and Privacy Information Management",   
        url: "https://alison.com/course/iso-27701-data-protection-and-privacy-information-management",
    },
    {
        category: "Computer Security",
        description: "Cyber Security Best Practices and Standards",
        difficulty: "Intermediate",
        duration: "4hrs",
        imageUrl: "https://cdn01.alison-static.net/courses/5532/alison_courseware_intro_5532.jpg",
        provider: "Alison",
        title: "Cyber Security Best Practices and Standards",   
        url: "https://alison.com/course/cyber-security-best-practices-and-standards",
    },
    {
        category: "Computer Security",
        description: "Ethical Hacking Introduction",
        difficulty: "Advanced",
        duration: "3hrs",
        imageUrl: "https://cdn01.alison-static.net/courses/2276/alison_courseware_intro_2276.jpg",
        provider: "Alison",
        title: "Ethical Hacking; Information Security",   
        url: "https://alison.com/course/ethical-hacking-information-security",
    },
    {
        category: "Computer Security",
        description: "Trust and security with Google Cloud",
        difficulty: "Advanced",
        duration: "1hr",
        imageUrl: "https://www.simplilearn.com/ice9/app/Trust-and-Security-with-Google-Cloud.jpg",
        provider: "Simplilearn",
        title: "Trust and security with Google Cloud",   
        url: "https://www.simplilearn.com/free-trust-and-security-with-google-cloud-course-skillup?tag=information%20security",
    },
    {
        category: "Computer Security",
        description: "Computer Security and the Internet of Things - Risks and Challenges",
        difficulty: "Advanced",
        duration: "10hrs",
        imageUrl: "https://d3f1iyfxxz8i1e.cloudfront.net/courses/course_image/dd04435a06ae.jpg",
        provider: "Class Central",
        title: "Computer Security and the Internet of Things - Risks and Challenges",   
        url: "https://www.classcentral.com/classroom/youtube-usenix-enigma-2016-computer-security-and-the-internet-of-things-165518",
    },
    {
        category: "Network Administration",
        description: "Wired and Wireless Networks and Protocols",
        difficulty: "Beginner",
        duration: "3hrs",
        imageUrl: "https://cdn01.alison-static.net/courses/1443/alison_courseware_intro_1443.jpg",
        provider: "Alison",
        title: "Computer Networking - Wired and Wireless Networks and Protocols",   
        url: "https://alison.com/course/computer-networking-wired-and-wireless-networks-and-protocols-revised",
    },
    {
        category: "Network Administration",
        description: "Local Area Networks and the OSI Model",
        difficulty: "Beginner",
        duration: "3hrs",
        imageUrl: "https://cdn01.alison-static.net/courses/1442/alison_courseware_intro_1442.jpg",
        provider: "Alison",
        title: "Computer Networking - Local Area Networks and the OSI Model",   
        url: "https://alison.com/course/computer-networking-local-area-networks-and-the-osi-model-revised",
    },
    {
        category: "Network Administration",
        description: "Introduction to AWS Networking",
        difficulty: "Beginner",
        duration: "1hr",
        imageUrl: "https://www.simplilearn.com/ice9/app/AWS-Networking-Basics.jpg",
        provider: "Simplilearn",
        title: "AWS Networking Basics",   
        url: "https://www.simplilearn.com/free-aws-networking-course-skillup?tag=computer%20networking",
    },
    {
        category: "Network Administration",
        description: "Fundamentals of Network Engineering",
        difficulty: "Intermediate",
        duration: "16hrs",
        imageUrl: "https://www.simplilearn.com/ice9/app/AWS-Networking-Basics.jpg",
        provider: "Udemy",
        title: "Fundamentals of Network Engineering",   
        url: "https://www.udemy.com/course/fundamentals-of-networking-for-effective-backend-design/?couponCode=ST3MT200225A",
    },
    {
        category: "Network Administration",
        description: "Cisco CCNA 200-301 - The Complete Guide to Getting Certified",
        difficulty: "Intermediate",
        duration: "42hrs",
        imageUrl: "https://www.simplilearn.com/ice9/app/AWS-Networking-Basics.jpg",
        provider: "Udemy",
        title: "Cisco CCNA 200-301 - The Complete Guide to Getting Certified",   
        url: "https://www.udemy.com/course/ccna-complete/?couponCode=ST3MT200225A",
    },
    {
        category: "Network Administration",
        description: "VMware and vSphere 6.5 Administration",
        difficulty: "Intermediate",
        duration: "15hrs",
        imageUrl: "https://cdn01.alison-static.net/courses/3617/alison_courseware_intro_3617.jpg",
        provider: "Alison",
        title: "Diploma in VMware and vSphere 6.5 Administration",   
        url: "https://alison.com/course/diploma-in-vmware-and-vsphere-6-5-administration",
    },
    {
        category: "Network Administration",
        description: "CompTIA Cloud+ Advanced",
        difficulty: "Advanced",
        duration: "4hrs",
        imageUrl: "https://cdn01.alison-static.net/courses/1943/alison_courseware_intro_1943.jpg",
        provider: "Alison",
        title: "CompTIA Cloud+ Advanced",   
        url: "https://alison.com/course/comptia-cloud-advanced",
    },
    {
        category: "Network Administration",
        description: "Cisco Certified Network Associate ( CCNA 200-301 ) Kursu",
        difficulty: "Advanced",
        duration: "52hrs",
        imageUrl: "https://cdn01.alison-static.net/courses/3617/alison_courseware_intro_3617.jpg",
        provider: "Udemy",
        title: "Cisco Certified Network Associate ( CCNA 200-301 ) Kursu",   
        url: "https://www.udemy.com/course/cisco-certified-network-associate-ccna-200-301-egitimi/",
    },
    {
        category: "Network Administration",
        description: "Introduction to Connectivity Technologies and Sensor Networks",
        difficulty: "Advanced",
        duration: "6hrs",
        imageUrl: "https://cdn01.alison-static.net/courses/2352/alison_courseware_intro_2352.jpg",
        provider: "Alison",
        title: "Introduction to Connectivity Technologies and Sensor Networks",   
        url: "https://alison.com/course/introduction-to-connectivity-technologies-and-sensor-networks",
    },
    {
        category: "Project Management",
        description: "Introduction to Jira",
        difficulty: "Beginner",
        duration: "1hr",
        imageUrl: "https://www.simplilearn.com/ice9/app/Introduction-to-JIRA.jpg",
        provider: "Simplilearn",
        title: "Introduction to Jira",   
        url: "https://www.simplilearn.com/free-jira-course-skillup?tag=project%20management",
    },
    {
        category: "Project Management",
        description: "Project Management certification training",
        difficulty: "Beginner",
        duration: "2hrs",
        imageUrl: "https://www.simplilearn.com/ice9/app/Project-Management-101-PMP-certification-training.jpg",
        provider: "Simplilearn",
        title: "Project Management 101: PMP certification training",   
        url: "https://www.simplilearn.com/free-pmp-beginner-course-skillup?tag=project%20management",
    },
    {
        category: "Project Management",
        description: "Project Management: The Basics for Success",
        difficulty: "Beginner",
        duration: "9hrs",
        imageUrl: "https://cdn01.alison-static.net/courses/2352/alison_courseware_intro_2352.jpg",
        provider: "University of California via Coursera",
        title: "Project Management: The Basics for Success",   
        url: "https://www.classcentral.com/course/basicprojmanage-2782",
    },
    {
        category: "Project Management",
        description: "Managing project risks and changes",
        difficulty: "Intermediate",
        duration: "6hrs",
        imageUrl: "https://d3f1iyfxxz8i1e.cloudfront.net/courses/course_image_variant/249a30e46ac9_w240.webp",
        provider: "University of California via Coursera",
        title: "Managing project risks and changes",   
        url: "https://www.classcentral.com/course/projectrisks-2730",
    },
    {
        category: "Project Management",
        description: "Agile project management",
        difficulty: "Intermediate",
        duration: "3hrs",
        imageUrl: "https://cdn01.alison-static.net/courses/5661/alison_courseware_intro_5661.jpg",
        provider: "Alison",
        title: "Agile Project Management",   
        url: "https://alison.com/course/agile-project-management",
    },
    {
        category: "Project Management",
        description: "AI in project management",
        difficulty: "Intermediate",
        duration: "3hrs",
        imageUrl: "https://cdn01.alison-static.net/courses/6746/alison_courseware_intro_6746.jpg",
        provider: "Alison",
        title: "AI in project management",   
        url: "https://alison.com/course/artificial-intelligence-in-project-management",
    },
    {
        category: "Project Management",
        description: "Production and Operation Management; Project Management",
        difficulty: "Advanced",
        duration: "5hrs",
        imageUrl: "https://cdn01.alison-static.net/courses/2313/alison_courseware_intro_2313.jpg",
        provider: "Alison",
        title: "Production and Operation Management; Project Management",   
        url: "https://alison.com/course/production-and-operation-management-project-management",
    },
    {
        category: "Project Management",
        description: "Advanced Project Management-Measuring Project Performance",
        difficulty: "Advanced",
        duration: "2hrs",
        imageUrl: "https://cdn01.alison-static.net/courses/6746/alison_courseware_intro_6746.jpg",
        provider: "Udemy",
        title: "Advanced Project Management-Measuring Project Performance",   
        url: "https://www.udemy.com/course/advanced-project-management-measuring-project-performance/?couponCode=ST3MT200225A",
    },
    {
        category: "Project Management",
        description: "Microsoft Project 2019 Advanced: Master MS Project",
        difficulty: "Advanced",
        duration: "8hrs",
        imageUrl: "https://cdn01.alison-static.net/courses/6746/alison_courseware_intro_6746.jpg",
        provider: "Udemy",
        title: "Microsoft Project 2019 Advanced: Master MS Project",   
        url: "https://www.udemy.com/course/microsoft-project-2019-advanced-online-course/?couponCode=ST3MT200225A",
    },
    {
        category: "Artificial Intelligence",
        description: "Generative AI for beginners",
        difficulty: "Beginner",
        duration: "4hrs",
        imageUrl: "https://www.simplilearn.com/ice9/app/sqli.jpg",
        provider: "Udemy",
        title: "Generative AI for beginners",   
        url: "https://www.simplilearn.com/generative-ai-for-beginners-free-course-skillup?tag=AI",
    },
    {
        category: "Artificial Intelligence",
        description: "Artificial Intelligence - Current and Future Paradigms and Implications",
        difficulty: "Beginner",
        duration: "3hrs",
        imageUrl: "https://d3f1iyfxxz8i1e.cloudfront.net/courses/course_image/5875f5649b3b.jpg",
        provider: "Class Central",
        title: "Artificial Intelligence - Current and Future Paradigms and Implications",   
        url: "https://www.classcentral.com/classroom/youtube-stanford-seminar-artificial-intelligence-current-and-future-paradigms-and-implications-191912",
    },
    {
        category: "Artificial Intelligence",
        description: "Introduction to Analytics and Artificial Intelligence - AI Training for Beginners",
        difficulty: "Beginner",
        duration: "8hrs",
        imageUrl: "https://d3f1iyfxxz8i1e.cloudfront.net/courses/course_image/3ce9eb0761d9.jpg",
        provider: "Class Central",
        title: "Introduction to Analytics and Artificial Intelligence",   
        url: "https://www.classcentral.com/classroom/youtube-introduction-to-analytics-and-artificial-intelligence-ai-training-for-beginners-203978",
    },
    {
        category: "Artificial Intelligence",
        description: "AI Risk Management and Incident Response",
        difficulty: "Intermediate",
        duration: "3hrs",
        imageUrl: "https://cdn01.alison-static.net/courses/6951/alison_courseware_intro_6951.jpg",
        provider: "Alison",
        title: "AI Risk Management and Incident Response",   
        url: "https://alison.com/course/ai-risk-management-and-incident-response",
    },
    {
        category: "Artificial Intelligence",
        description: "Prompt Engineering for AI Applications",
        difficulty: "Intermediate",
        duration: "3hrs",
        imageUrl: "https://cdn01.alison-static.net/courses/6831/alison_courseware_intro_6831.jpg",
        provider: "Alison",
        title: "Prompt Engineering for AI Applications",   
        url: "https://alison.com/course/prompt-engineering-for-ai-applications",
    },
    {
        category: "Artificial Intelligence",
        description: "AI-Powered Cybersecurity Fundamentals",
        difficulty: "Intermediate",
        duration: "4hrs",
        imageUrl: "https://cdn01.alison-static.net/courses/7295/alison_courseware_intro_7295.jpg",
        provider: "Alison",
        title: "AI-Powered Cybersecurity Fundamentals",   
        url: "https://alison.com/course/ai-powered-cybersecurity-fundamentals",
    },
    {
        category: "Artificial Intelligence",
        description: "Azure AI Agent Service (AI Foundry, Semantic Kernel SDK)",
        difficulty: "Advanced",
        duration: "7hrs",
        imageUrl: "https://cdn01.alison-static.net/courses/7295/alison_courseware_intro_7295.jpg",
        provider: "Udemy",
        title: "Azure AI Agent Service",   
        url: "https://www.udemy.com/course/azure-ai-agent-service-ai-foundry-semantic-kernel-sdk/?couponCode=ST3MT200225A",
    },
    {
        category: "Artificial Intelligence",
        description: "Learn Hugging Face",
        difficulty: "Advanced",
        duration: "4hrs",
        imageUrl: "https://cdn01.alison-static.net/courses/7295/alison_courseware_intro_7295.jpg",
        provider: "Udemy",
        title: "Learn Hugging Face Bootcamp",   
        url: "https://www.udemy.com/course/complete-hugging-face-bootcamp/?couponCode=ST3MT200225A",
    },
    {
        category: "Artificial Intelligence",
        description: "AI in Cybersecurity: Intrusion, Threat Hunting, and Incident Response",
        difficulty: "Advanced",
        duration: "4hrs",
        imageUrl: "https://cdn01.alison-static.net/courses/7360/alison_courseware_intro_7360.jpg",
        provider: "Alison",
        title: "AI in Cybersecurity: Intrusion, Threat Hunting, and Incident Response",   
        url: "https://alison.com/course/ai-in-cybersecurity-intrusion-threat-hunting-and-incident-response",
    },
    {
        category: "Data Structure and Algorithms",
        description: "Introduction to Data structure",
        difficulty: "Beginner",
        duration: "4hrs",
        imageUrl: "https://cdn01.alison-static.net/courses/4343/alison_courseware_intro_4343.jpg",
        provider: "Alison",
        title: "Introduction to Data structure",   
        url: "https://alison.com/course/introduction-to-data-structures",
    },
    {
        category: "Data Structure and Algorithms",
        description: "Introduction to Sorting Algorithm",
        difficulty: "Beginner",
        duration: "3hrs",
        imageUrl: "https://www.simplilearn.com/ice9/app/IntroductiontotheSortingAlgorithms.jpg",
        provider: "Simplilearn",
        title: "Introduction to Sorting Algorithm",   
        url: "https://alison.com/course/ai-in-cybersecurity-intrusion-threat-hunting-and-incident-response",
    },
    {
        category: "Data Structure and Algorithms",
        description: "Fundamentals of Data structure in C",
        difficulty: "Beginner",
        duration: "10hrs",
        imageUrl: "https://www.simplilearn.com/ice9/app/sqli.jpg",
        provider: "Simplilearn",
        title: "Fundamentals of Data structure in C",   
        url: "https://www.simplilearn.com/fundamentals-of-data-structures-in-c-skillup?tag=data%20structures%20and%20algorithms",
    },
    {
        category: "Data Structure and Algorithms",
        description: "Data Structure and Algorithms deep dive using Java",
        difficulty: "Intermediate",
        duration: "16hrs",
        imageUrl: "https://www.simplilearn.com/ice9/app/sqli.jpg",
        provider: "Udemy",
        title: "Data Structure and Algorithms deep dive using Java",   
        url: "https://www.udemy.com/course/data-structures-and-algorithms-deep-dive-using-java/?couponCode=ST3MT200225A",
    },
    {
        category: "Data Structure and Algorithms",
        description: "Data Structure and Algorithm with Interview Questions - Comprehensive Python Guide",
        difficulty: "Intermediate",
        duration: "10hrs",
        imageUrl: "https://d3f1iyfxxz8i1e.cloudfront.net/courses/course_image/e474d73f0692.jpg",
        provider: "Class Central",
        title: "Data Structure and Algorithm with Interview Questions - Comprehensive Python Guide",   
        url: "https://www.classcentral.com/classroom/youtube-data-structure-and-algorithm-with-interview-questions-307114",
    },
    {
        category: "Data Structure and Algorithms",
        description: "Python for Data Structures, Algorithms, and Interviews!",
        difficulty: "Intermediate",
        duration: "17hrs",
        imageUrl: "https://www.simplilearn.com/ice9/app/sqli.jpg",
        provider: "Udemy",
        title: "Python for Data Structures, Algorithms, and Interviews!",   
        url: "https://www.udemy.com/course/python-for-data-structures-algorithms-and-interviews/?couponCode=ST3MT200225A",
    },
    {
        category: "Data Structure and Algorithms",
        description: "Data Structures and Algorithms Complete Course - CPP & JAVA",
        difficulty: "Advanced",
        duration: "82hrs",
        imageUrl: "https://www.simplilearn.com/ice9/app/sqli.jpg",
        provider: "Udemy",
        title: "Data Structures and Algorithms Complete Course - CPP & JAVA",   
        url: "https://www.udemy.com/course/data-structures-and-algorithms-complete-course-cpp-java/?couponCode=ST3MT200225Ahttps://www.udemy.com/course/python-for-data-structures-algorithms-and-interviews/?couponCode=ST3MT200225A",
    },
    {
        category: "Data Structure and Algorithms",
        description: "Data Structures, Algorithms and Design Patterns with Go",
        difficulty: "Advanced",
        duration: "10hrs",
        imageUrl: "https://www.simplilearn.com/ice9/app/sqli.jpg",
        provider: "Udemy",
        title: "Go: Data Structures, Algorithms and Design Patterns with Go",   
        url: "https://www.udemy.com/course/go-data-structures-algorithms-and-design-patterns-with-go/?couponCode=ST3MT200225A",
    },
    {
        category: "Data Structure and Algorithms",
        description: "Data Structures and Algorithms: A Complete Guide in C",
        difficulty: "Advanced",
        duration: "7hrs",
        imageUrl: "https://www.simplilearn.com/ice9/app/sqli.jpg",
        provider: "Udemy",
        title: "Data Structures and Algorithms: A Complete Guide in C",   
        url: "https://www.udemy.com/course/data-structures-and-algorithms-a-complete-guide-in-c/?couponCode=ST3MT200225A",
    },
];

const quizzes = {
    "Java Programming for Beginners": [
        {
            question: "What is Java?",
            options: ["A programming language", "A fruit", "A country", "A city"],
            answer: "A programming language"
        },
        {
            question: "What is the latest version of Java?",
            options: ["Java 8", "Java 9", "Java 10", "Java 11"],
            answer: "Java 11"
        },
        {
            question: "What is the main feature of Java?",
            options: ["Object Oriented", "Procedural", "Functional", "Logical"],
            answer: "Object Oriented"
        },
        {
            question: "What is the main function of Java?",
            options: ["To create web applications", "To create mobile applications", "To create desktop applications", "To create enterprise applications"],
            answer: "To create enterprise applications"
        },
        {
            question: "What is the main advantage of Java?",
            options: ["Platform independent", "Platform dependent", "Platform specific", "Platform neutral"],
            answer: "Platform independent"
        }
    ],
    "OOPs in Java Programming": [
        {
            question: "What is OOP?",
            options: ["Object Oriented Programming", "Object Oriented Protocol", "Object Oriented Process", "Object Oriented Procedure"],
            answer: "Object Oriented Programming"
        },
        {
            question: "What is the main feature of OOP?",
            options: ["Encapsulation", "Inheritance", "Polymorphism", "Abstraction"],
            answer: "Encapsulation"
        },
        {
            question: "What is the main advantage of OOP?",
            options: ["Reusability", "Readability", "Maintainability", "Scalability"],
            answer: "Reusability"
        },
        {
            question: "What is the main principle of OOP?",
            options: ["DRY", "KISS", "YAGNI", "SOLID"],
            answer: "SOLID"
        },
        {
            question: "What is the main concept of OOP?",
            options: ["Class and Object", "Function and Procedure", "Variable and Constant", "Module and Package"],
            answer: "Class and Object"
        }
    ],

    "Inroduction to Java Spring Framework": [
        {
            question: "What is Spring Framework?",
            options: ["A programming language", "A fruit", "A country", "A city"],
            answer: "A programming language"
        },
        {
            question: "What is the main feature of Spring Framework?",
            options: ["Dependency Injection", "Inversion of Control", "Aspect Oriented Programming", "Data Access"],
            answer: "Dependency Injection"
        },
        {
            question: "What is the main advantage of Spring Framework?",
            options: ["Loose Coupling", "Tight Coupling", "High Cohesion", "Low Cohesion"],
            answer: "Loose Coupling"
        },
        {
            question: "What is the main function of Spring Framework?",
            options: ["To create web applications", "To create mobile applications", "To create desktop applications", "To create enterprise applications"],
            answer: "To create enterprise applications"
        },
        {
            question: "What is the main advantage of Spring Framework?",
            options: ["Platform independent", "Platform dependent", "Platform specific", "Platform neutral"],
            answer: "Platform independent"
        }
    ],

    "Beginner in Advanced Swift Programming for IOS": [
        {
            question: "What is Swift?",
            options: ["A programming language", "A mobile app", "A database configuration", "A web server"],
            answer: "A programming language"
        },
        {
            question: "What is the latest version of Swift?",
            options: ["Swift 3", "Swift 4", "Swift 5", "Swift 6"],
            answer: "Swift 5"
        },
        {
            question: "What is the main feature of Swift?",
            options: ["Object Oriented", "Procedural", "Functional", "Logical"],
            answer: "Object Oriented"
        },
        {
            question: "What is the main function of Swift?",
            options: ["To create web applications", "To create mobile applications", "To create desktop applications", "To create enterprise applications"],
            answer: "To create enterprise applications"
        },
        {
            question: "What is the main advantage of Swift?",
            options: ["Platform independent", "Platform dependent", "Platform specific", "Platform neutral"],
            answer: "Platform independent"
        }
    ],

    "App Development using Dart Programming language": [
        {
            question: "In Dart, which feature allows you to define a function inside another function and access variables from the outer function?",
            options:["Static methods", "Anonymous functions", "Closures", "Mixins"],
            answer:"Closures"
        },
        {
            question: "What is the purpose of the FutureOr<T> type in Dart?",
            options:["It represents a value that is always asynchronous", "It allows a function to return either a Future<T> or T synchronously", "It is a replacement for async and await", "It forces a function to execute synchronously"],
            answer:"It allows a function to return either a Future<T> or T synchronously"
        },
        {
            question: "How does Dart handle memory management for objects that are no longer in use?",
            options:["Reference counting", "Manual garbage collection", "Automatic garbage collection using generational GC", "Stack-based memory deallocation"],
            answer:"Automatic garbage collection using generational GC"
        },
        {
            question: " In Flutter development with Dart, what is the difference between Stream and Future?",
            options:["A Future represents multiple values over time, while a Stream completes after one value","A Stream represents multiple values over time, while a Future completes with a single value","Both Stream and Future work identically in async programming","A Stream is always synchronous, while a Future is asynchronous"],
            answer:"A Stream represents multiple values over time, while a Future completes with a single value"
        },
        {
            question: "What is the primary benefit of using extension methods in Dart?",
            options:["They allow modifying existing classes without changing their source code","They replace the need for mixins","They improve runtime performance by inlining functions"," They enable direct memory access to private fields"],
            answer:"They allow modifying existing classes without changing their source code"
        }
    ],

    "Master PLC Programming": [
            {
                "question": "Which of the following best describes the function of a watchdog timer in a PLC?",
                "options": [
                    "Ensures the PLC completes a scan cycle within a defined time limit",
                    "Monitors the external sensors for faults",
                    "Provides real-time clock synchronization",
                    "Stores historical data logs"
                ],
                "answer": "Ensures the PLC completes a scan cycle within a defined time limit"
            },
            {
                "question": "In ladder logic programming, what is the primary function of a 'seal-in' circuit?",
                "options": [
                    "To latch an output even after the input signal is removed",
                    "To detect and correct logic errors",
                    "To prevent unauthorized access to PLC memory",
                    "To reset the PLC in case of power failure"
                ],
                "answer": "To latch an output even after the input signal is removed"
            },
            {
                "question": "Which type of PLC memory is used to retain program data even when power is lost?",
                "options": [
                    "RAM",
                    "ROM",
                    "EEPROM",
                    "Cache Memory"
                ],
                "answer": "EEPROM"
            },
            {
                "question": "What is the primary advantage of using Function Block Diagram (FBD) over Ladder Logic in PLC programming?",
                "options": [
                    "It is easier to debug complex control algorithms",
                    "It reduces the need for memory usage",
                    "It allows direct hardware-level programming",
                    "It eliminates the need for input/output (I/O) modules"
                ],
                "answer": "It is easier to debug complex control algorithms"
            },
            {
                "question": "Which of the following communication protocols is MOST commonly used in industrial PLC networks?",
                "options": [
                    "Ethernet/IP",
                    "HTTP",
                    "SMTP",
                    "Bluetooth"
                ],
                "answer": "Ethernet/IP"
            }  
    ],

    "Python for Data Science": [
        {
            "question": "Which library is commonly used for data manipulation in Python?",
            "options": ["Matplotlib", "NumPy", "Pandas", "Seaborn"],
            "answer": "Pandas"
        },
        {
            "question": "What is the primary data structure in Pandas?",
            "options": ["Array", "DataFrame", "List", "Tuple"],
            "answer": "DataFrame"
        },
        {
            "question": "Which function is used to read a CSV file into a Pandas DataFrame?",
            "options": ["read_csv()", "import_csv()", "load_csv()", "open_csv()"],
            "answer": "read_csv()"
        },
        {
            "question": "What library is primarily used for numerical computing in Python?",
            "options": ["Scikit-learn", "TensorFlow", "NumPy", "BeautifulSoup"],
            "answer": "NumPy"
        },
        {
            "question": "Which command is used to display the first few rows of a DataFrame?",
            "options": ["df.top()", "df.head()", "df.start()", "df.show()"],
            "answer": "df.head()"
        }
    ],

    "The Data Scientist’s Toolbox": [
        {
            "question": "Which of the following is a popular programming language for data science?",
            "options": ["Java", "C++", "Python", "Swift"],
            "answer": "Python"
        },
        {
            "question": "Which library is commonly used for data manipulation in Python?",
            "options": ["TensorFlow", "Matplotlib", "Pandas", "Seaborn"],
            "answer": "Pandas"
        },
        {
            "question": "What is Jupyter Notebook mainly used for?",
            "options": ["Video editing", "Web development", "Data analysis and visualization", "Mobile app development"],
            "answer": "Data analysis and visualization"
        },
        {
            "question": "Which tool is used for big data processing?",
            "options": ["Excel", "Apache Spark", "SQLite", "Photoshop"],
            "answer": "Apache Spark"
        },
        {
            "question": "Which of the following is a popular machine learning library in Python?",
            "options": ["NumPy", "Scikit-learn", "Flask", "Bootstrap"],
            "answer": "Scikit-learn"
        }
    ],

    "Getting and Cleaning Data": [
        {
            "question": "Which of the following is NOT a common step in data cleaning?",
            "options": [
                "Handling missing values",
                "Removing duplicate records",
                "Adding random noise to the dataset",
                "Standardizing data formats"
            ],
            "answer": "Adding random noise to the dataset"
        },
        {
            "question": "What is the primary purpose of data normalization?",
            "options": [
                "To reduce the size of the dataset",
                "To ensure data follows a Gaussian distribution",
                "To scale features to a common range",
                "To remove duplicate data entries"
            ],
            "answer": "To scale features to a common range"
        },
        {
            "question": "Which function in Python's Pandas library is used to handle missing values by replacing them with a specific value?",
            "options": [
                "dropna()",
                "fillna()",
                "replace()",
                "interpolate()"
            ],
            "answer": "fillna()"
        },
        {
            "question": "When merging two datasets in Pandas, which type of join returns only the matching records from both datasets?",
            "options": [
                "Left Join",
                "Right Join",
                "Inner Join",
                "Outer Join"
            ],
            "answer": "Inner Join"
        },
        {
            "question": "Which of the following techniques is used to detect and remove outliers from a dataset?",
            "options": [
                "Applying Min-Max scaling",
                "Using Z-score or IQR method",
                "One-hot encoding categorical variables",
                "Filling missing values with mean"
            ],
            "answer": "Using Z-score or IQR method"
        }
    ],

    "Mastering Data Analysis in Excel": [
        {
            "question": "Which Excel function is used to find the average of a range of cells while applying a condition?",
            "options": ["AVERAGE", "IF", "AVERAGEIF", "SUMIF"],
            "answer": "AVERAGEIF"
        },
        {
            "question": "Which feature in Excel allows you to summarize large amounts of data by dragging and dropping fields?",
            "options": ["Data Validation", "Pivot Table", "Conditional Formatting", "VLOOKUP"],
            "answer": "Pivot Table"
        },
        {
            "question": "What does the function =INDEX(A2:A10, MATCH(50, B2:B10, 0)) do?",
            "options": [
                "Finds the value 50 in column A and returns the corresponding value from column B",
                "Finds the value 50 in column B and returns the corresponding value from column A",
                "Looks up the value 50 in column A and returns its position",
                "Sorts column A based on the values in column B"
            ],
            "answer": "Finds the value 50 in column B and returns the corresponding value from column A"
        },
        {
            "question": "Which of the following is the correct way to remove duplicates in an Excel dataset?",
            "options": [
                "Use the Remove Duplicates feature under the Data tab",
                "Apply Conditional Formatting",
                "Use the VLOOKUP function",
                "Manually delete rows one by one"
            ],
            "answer": "Use the Remove Duplicates feature under the Data tab"
        },
        {
            "question": "Which Excel function is best for searching and retrieving data from a table based on a lookup value?",
            "options": ["VLOOKUP", "HLOOKUP", "INDEX-MATCH", "All of the above"],
            "answer": "All of the above"
        }
    ],

    "Data Science in Real Life": [
        {
            "question": "Which technique is commonly used in credit card fraud detection?",
            "options": ["Logistic Regression", "K-Means Clustering", "Apriori Algorithm", "Random Forest"],
            "answer": "Random Forest"
        },
        {
            "question": "Which metric is most useful for evaluating an imbalanced classification problem, such as detecting rare diseases?",
            "options": ["Accuracy", "Mean Squared Error", "F1-Score", "R-squared"],
            "answer": "F1-Score"
        },
        {
            "question": "In recommendation systems (e.g., Netflix suggestions), which algorithm is commonly used to predict user preferences?",
            "options": ["Principal Component Analysis (PCA)", "Collaborative Filtering", "K-Means Clustering", "Linear Regression"],
            "answer": "Collaborative Filtering"
        },
        {
            "question": "Which machine learning model is best suited for predicting house prices based on features like location, size, and amenities?",
            "options": ["Decision Tree", "K-Means Clustering", "Naive Bayes", "K-Nearest Neighbors"],
            "answer": "Decision Tree"
        },
        {
            "question": "What is a common challenge in training machine learning models with real-world data?",
            "options": ["Having too much labeled data", "Data being perfectly clean and structured", "Data being noisy and incomplete", "Algorithms running too fast"],
            "answer": "Data being noisy and incomplete"
        }
    ],

    "Data Science with Scala": [
        {
            "question": "Which of the following libraries in Scala is most commonly used for distributed data processing?",
            "options": ["Akka", "Spark", "ScalaFX", "Play Framework"],
            "answer": "Spark"
        },
        {
            "question": "In Scala, which data structure is used to represent a mutable collection that can grow or shrink?",
            "options": ["List", "ArrayBuffer", "Vector", "Set"],
            "answer": "ArrayBuffer"
        },
        {
            "question": "Which of the following is a feature of Scala that allows functions to be passed as arguments to other functions?",
            "options": ["Pattern Matching", "First-Class Functions", "Immutable Collections", "Lazy Evaluation"],
            "answer": "First-Class Functions"
        },
        {
            "question": "In Scala, what is the purpose of the 'future' construct in concurrency programming?",
            "options": ["To create asynchronous tasks", "To manage the lifecycle of threads", "To create infinite loops", "To execute code in parallel"],
            "answer": "To create asynchronous tasks"
        },
        {
            "question": "In Scala, which of the following methods is used to group and aggregate data in a dataset?",
            "options": ["map", "reduce", "groupBy", "filter"],
            "answer": "groupBy"
        }
    ],

    "Rendering and graphics": [
        {
            "question": "What is the primary function of a graphics rendering engine?",
            "options": ["To store images", "To display and process visual content", "To encode audio", "To manage network traffic"],
            "answer": "To display and process visual content"
        },
        {
            "question": "Which of the following is a commonly used rendering technique in 3D graphics?",
            "options": ["Ray tracing", "Image processing", "Audio encoding", "Network communication"],
            "answer": "Ray tracing"
        },
        {
            "question": "In 3D graphics, what does the term 'polygon' refer to?",
            "options": ["A tool for animation", "A point on a 3D surface", "A flat 2D shape", "A geometric shape made up of vertices and edges"],
            "answer": "A geometric shape made up of vertices and edges"
        },
        {
            "question": "What is the purpose of texture mapping in 3D rendering?",
            "options": ["To create a 3D model", "To apply a color or image to a 3D object", "To add depth to a 2D surface", "To reduce rendering time"],
            "answer": "To apply a color or image to a 3D object"
        },
        {
            "question": "Which rendering technique is known for simulating light rays to create realistic lighting and shadows?",
            "options": ["Rasterization", "Ray tracing", "Vectorization", "Texturing"],
            "answer": "Ray tracing"
        }
    ],

    "UI/UX basics": [
        {
            "question": "What does UI stand for in design?",
            "options": ["User Interface", "Unified Interface", "User Interaction", "Universal Interface"],
            "answer": "User Interface"
        },
        {
            "question": "What is the primary goal of UX design?",
            "options": ["To make interfaces look visually appealing", "To enhance the user experience", "To improve product functionality", "To create complex designs"],
            "answer": "To enhance the user experience"
        },
        {
            "question": "Which of the following is a principle of UX design?",
            "options": ["Consistency", "Clutter", "Unpredictability", "Overcomplication"],
            "answer": "Consistency"
        },
        {
            "question": "What is wireframing in UI/UX design?",
            "options": ["The process of creating high-fidelity designs", "A method of prototyping and testing features", "A low-fidelity visual representation of a product", "The final design of a product"],
            "answer": "A low-fidelity visual representation of a product"
        },
        {
            "question": "Which color contrast is best for accessibility in UI design?",
            "options": ["High contrast", "Low contrast", "Monochromatic", "Gradient contrast"],
            "answer": "High contrast"
        }
    ],

    "C# GUI": [
        {
            question: "Which of the following is used to create a GUI in C#?",
            options: ["Console", "Windows Forms", "C# Command Line", "ASP.NET"],
            answer: "Windows Forms"
        },
        {
            question: "What is the default control for accepting text input from the user in C#?",
            options: ["Button", "TextBox", "Label", "CheckBox"],
            answer: "TextBox"
        },
        {
            question: "Which event is triggered when a user clicks a button in a C# Windows Form?",
            options: ["ButtonClick", "Click", "ButtonPressed", "OnClick"],
            answer: "Click"
        },
        {
            question: "Which property of a Button control is used to change its text in C#?",
            options: ["Text", "Label", "ButtonText", "Content"],
            answer: "Text"
        },
        {
            question: "What is the purpose of the 'Form' class in C#?",
            options: ["To represent a data model", "To handle GUI components", "To manage the application's main window", "To handle database operations"],
            answer: "To manage the application's main window"
        }
    ],

    "Build a modern UI using Chakara UI": [
        {
            question: "What is Chakra UI?",
            options: [
                "A JavaScript framework",
                "A CSS framework",
                "A React component library",
                "A state management tool"
            ],
            answer: "A React component library"
        },
        {
            question: "Which of the following Chakra UI components is used to create a responsive container?",
            options: [
                "Box",
                "Flex",
                "Container",
                "Grid"
            ],
            answer: "Container"
        },
        {
            question: "How do you customize the default Chakra UI theme?",
            options: [
                "By modifying the global CSS",
                "By using the theme object and extending it",
                "By using inline styles",
                "By importing custom CSS files"
            ],
            answer: "By using the theme object and extending it"
        },
        {
            question: "Which Chakra UI component is commonly used for form inputs?",
            options: [
                "Button",
                "TextField",
                "Input",
                "Label"
            ],
            answer: "Input"
        },
        {
            question: "What is the purpose of Chakra UI's 'useBreakpointValue' hook?",
            options: [
                "To manage form inputs",
                "To handle user authentication",
                "To make components responsive",
                "To manage application state"
            ],
            answer: "To make components responsive"
        }
    ],

    "Graphics Design Master Class": [
        {
            question: "What is the primary purpose of using the RGB color model in graphic design?",
            options: ["To create vibrant digital images", "To print images", "To adjust brightness in images", "To maintain color consistency in print"],
            answer: "To create vibrant digital images"
        },
        {
            question: "Which of the following is an example of a vector graphic?",
            options: ["JPEG", "PNG", "SVG", "GIF"],
            answer: "SVG"
        },
        {
            question: "What does 'kerning' refer to in typography?",
            options: ["Spacing between lines of text", "Spacing between individual characters", "The size of the text", "The font style used in a design"],
            answer: "Spacing between individual characters"
        },
        {
            question: "Which software is commonly used for creating vector illustrations?",
            options: ["Adobe Photoshop", "CorelDRAW", "Adobe Illustrator", "GIMP"],
            answer: "Adobe Illustrator"
        },
        {
            question: "What does 'contrast' in design primarily refer to?",
            options: ["The balance of elements in a design", "The difference in visual elements to make them stand out", "The uniformity of colors used", "The consistency in typography"],
            answer: "The difference in visual elements to make them stand out"
        }
    ],

    "User Experience Design Essentials": [
        {
            question: "What is the primary goal of User Experience (UX) Design?",
            options: ["To make products visually appealing", "To create a seamless and intuitive user experience", "To develop advanced features", "To focus on backend development"],
            answer: "To create a seamless and intuitive user experience"
        },
        {
            question: "Which of the following is a key principle in UX design?",
            options: ["Functionality is more important than aesthetics", "Consistency improves usability", "Design should be complex for versatility", "Speed should be the only priority"],
            answer: "Consistency improves usability"
        },
        {
            question: "What does 'user research' in UX design help to understand?",
            options: ["User preferences and behaviors", "How to increase website traffic", "How to optimize backend code", "How to add advanced features"],
            answer: "User preferences and behaviors"
        },
        {
            question: "Which of the following is an example of a usability testing method?",
            options: ["A/B testing", "User surveys", "Wireframing", "Rapid prototyping"],
            answer: "A/B testing"
        },
        {
            question: "What is the purpose of creating personas in UX design?",
            options: ["To represent the average user", "To design for a broad audience", "To create fictional characters that represent different user types", "To focus on the visual design aspect"],
            answer: "To create fictional characters that represent different user types"
        }
    ],

    "Web Accessibility Development": [
        {
            "question": "What is web accessibility?",
            "options": [
                "The process of making websites more visually appealing.",
                "Designing websites that are usable by people with various disabilities.",
                "Optimizing websites for mobile devices.",
                "Making websites faster to load."
            ],
            "answer": "Designing websites that are usable by people with various disabilities."
        },
        {
            "question": "Which of the following is a guideline for web accessibility?",
            "options": [
                "Avoid using any form of text content.",
                "Ensure that all images have descriptive alt text.",
                "Use only flash-based elements for media.",
                "Avoid providing text alternatives for audio content."
            ],
            "answer": "Ensure that all images have descriptive alt text."
        },
        {
            "question": "What does WCAG stand for?",
            "options": [
                "Web Content Accessibility Guidelines",
                "Web Common Accessible Guide",
                "World Code for Accessible Groups",
                "Wide Classification of Accessible Graphics"
            ],
            "answer": "Web Content Accessibility Guidelines"
        },
        {
            "question": "Which of the following tools can be used to test web accessibility?",
            "options": [
                "Google Analytics",
                "Color Contrast Analyzer",
                "Chrome Developer Tools",
                "Screencast-o-matic"
            ],
            "answer": "Color Contrast Analyzer"
        },
        {
            "question": "Why is keyboard navigation important for web accessibility?",
            "options": [
                "Because not all users can use a mouse.",
                "Because it improves the visual design of websites.",
                "Because it reduces the number of clicks required to navigate.",
                "Because it increases page load times."
            ],
            "answer": "Because not all users can use a mouse."
        }
    ],

    "Project Management 101: PMP certification training": [
        {
            "question": "What is the primary purpose of project management?",
            "options": ["To complete the project on time", "To manage resources", "To deliver the project successfully within scope, time, and cost", "To reduce project costs"],
            "answer": "To deliver the project successfully within scope, time, and cost"
        },
        {
            "question": "Which of the following is NOT one of the five process groups in project management?",
            "options": ["Initiating", "Planning", "Executing", "Selling"],
            "answer": "Selling"
        },
        {
            "question": "What is a Work Breakdown Structure (WBS)?",
            "options": ["A list of all the stakeholders", "A hierarchical decomposition of the total scope of work", "A document detailing the project budget", "A list of risks in the project"],
            "answer": "A hierarchical decomposition of the total scope of work"
        },
        {
            "question": "Which of the following is an example of a project constraint?",
            "options": ["Project manager's leadership style", "Stakeholder preferences", "Project schedule", "Team member performance"],
            "answer": "Project schedule"
        },
        {
            "question": "In which process group does project performance monitoring and controlling occur?",
            "options": ["Initiating", "Planning", "Executing", "Monitoring and Controlling"],
            "answer": "Monitoring and Controlling"
        }
    ],

    "Introduction to cyber security": [
        {
            "question": "What is the primary goal of Cyber Security?",
            "options": [
                "To protect information from unauthorized access",
                "To increase the speed of internet browsing",
                "To monitor employee behavior on computers",
                "To improve the efficiency of computer networks"
            ],
            "answer": "To protect information from unauthorized access"
        },
        {
            "question": "Which of the following is an example of a phishing attack?",
            "options": [
                "A fake email asking you to update your account details",
                "A software update alert from your operating system",
                "A pop-up advertising a new software tool",
                "A warning about low disk space on your computer"
            ],
            "answer": "A fake email asking you to update your account details"
        },
        {
            "question": "What is the term for a software program designed to gain unauthorized access to a computer system?",
            "options": [
                "Malware",
                "Firewall",
                "Antivirus",
                "Encryption"
            ],
            "answer": "Malware"
        },
        {
            "question": "Which of the following is a good practice for creating strong passwords?",
            "options": [
                "Use a mix of uppercase, lowercase, numbers, and special characters",
                "Use your birthdate for easy recall",
                "Use the same password for all your accounts",
                "Only use passwords that are 4 digits long"
            ],
            "answer": "Use a mix of uppercase, lowercase, numbers, and special characters"
        },
        {
            "question": "What does 'HTTPS' in a website address signify?",
            "options": [
                "The website is encrypted for secure communication",
                "The website contains free content",
                "The website has a high page rank",
                "The website is hosted on a secure server"
            ],
            "answer": "The website is encrypted for secure communication"
        }
    ],

    "Prompt Engineering for AI Applications": [
        {
            question: "What is prompt engineering in the context of AI?",
            options: [
                "Designing software applications for AI",
                "Creating structured inputs to guide AI responses",
                "Training AI models on large datasets",
                "Testing the performance of AI algorithms"
            ],
            answer: "Creating structured inputs to guide AI responses"
        },
        {
            question: "Which of the following is essential when crafting effective prompts for AI models?",
            options: [
                "Including as much irrelevant information as possible",
                "Being clear and specific in your instructions",
                "Making the prompt as short as possible",
                "Avoiding examples or clarifications"
            ],
            answer: "Being clear and specific in your instructions"
        },
        {
            question: "What type of AI models benefit most from prompt engineering?",
            options: [
                "Traditional rule-based systems",
                "Large language models like GPT",
                "Reinforcement learning models",
                "Image recognition models"
            ],
            answer: "Large language models like GPT"
        },
        {
            question: "Which technique can improve the effectiveness of a prompt in getting desired outputs?",
            options: [
                "Using ambiguous language",
                "Incorporating examples and constraints in the prompt",
                "Minimizing the length of the prompt",
                "Relying solely on AI model training data"
            ],
            answer: "Incorporating examples and constraints in the prompt"
        },
        {
            question: "Why is iterating on prompts important for AI applications?",
            options: [
                "It ensures the prompt is short and concise",
                "It helps refine the prompt to generate better, more accurate responses",
                "It eliminates the need for AI model training",
                "It reduces computational power usage"
            ],
            answer: "It helps refine the prompt to generate better, more accurate responses"
        }
    ],

    "Azure AI Agent Service": [
        {
            "question": "What is Azure AI Agent Service?",
            "options": [
                "A cloud service for running AI models",
                "A tool for building chatbots",
                "A service for deploying machine learning models",
                "A service for creating predictive analytics models"
            ],
            "answer": "A cloud service for running AI models"
        },
        {
            "question": "Which programming languages can be used with Azure AI Agent Service?",
            "options": [
                "Python and C#",
                "JavaScript and Java",
                "Java and C++",
                "C# and Ruby"
            ],
            "answer": "Python and C#"
        },
        {
            "question": "What is the primary use of Azure AI Agent Service?",
            "options": [
                "Running real-time data pipelines",
                "Building and managing AI agents for automation",
                "Creating visualizations of AI models",
                "Developing mobile applications"
            ],
            "answer": "Building and managing AI agents for automation"
        },
        {
            "question": "Which Azure service is commonly integrated with the Azure AI Agent Service for data storage?",
            "options": [
                "Azure Blob Storage",
                "Azure Databricks",
                "Azure Data Lake Storage",
                "Azure Cosmos DB"
            ],
            "answer": "Azure Blob Storage"
        },
        {
            "question": "How can developers monitor the performance of AI agents in Azure AI Agent Service?",
            "options": [
                "Using Azure Monitor",
                "Using Azure Sentinel",
                "Using Power BI",
                "Using Azure Logic Apps"
            ],
            "answer": "Using Azure Monitor"
        }
    ],

    "Computer Networking - Local Area Networks and the OSI Model": [
        {
            question: "What is the primary function of a Local Area Network (LAN)?",
            options: ["To connect devices across a large geographical area", "To connect devices within a limited area like a building or campus", "To connect devices on different continents", "To store and retrieve data from remote servers"],
            answer: "To connect devices within a limited area like a building or campus"
        },
        {
            question: "Which layer of the OSI model is responsible for end-to-end communication and error recovery?",
            options: ["Network layer", "Data Link layer", "Transport layer", "Physical layer"],
            answer: "Transport layer"
        },
        {
            question: "Which of the following is true about a switch in a LAN?",
            options: ["It operates at the physical layer", "It forwards data based on IP addresses", "It operates at the Data Link layer and forwards frames", "It only operates within a single computer"],
            answer: "It operates at the Data Link layer and forwards frames"
        },
        {
            question: "Which OSI layer is responsible for routing data between devices across different networks?",
            options: ["Physical layer", "Network layer", "Session layer", "Presentation layer"],
            answer: "Network layer"
        },
        {
            question: "Which of the following protocols operates at the Data Link layer in the OSI model?",
            options: ["IP", "ARP", "TCP", "HTTP"],
            answer: "ARP"
        }
    ],

    "Advanced Project Management-Measuring Project Performance": [
        {
            "question": "What is the primary purpose of measuring project performance?",
            "options": ["To assess team satisfaction", "To evaluate project progress and success", "To calculate project costs", "To identify risks"],
            "answer": "To evaluate project progress and success"
        },
        {
            "question": "Which of the following is a key performance indicator (KPI) for project performance?",
            "options": ["Time spent on project meetings", "Project scope changes", "Cost variance", "Number of tasks completed"],
            "answer": "Cost variance"
        },
        {
            "question": "What does Earned Value Management (EVM) help assess in project performance?",
            "options": ["Team productivity", "Project quality", "Cost and schedule performance", "Stakeholder satisfaction"],
            "answer": "Cost and schedule performance"
        },
        {
            "question": "Which method involves comparing actual project performance with the baseline to identify variances?",
            "options": ["Benchmarking", "Critical Path Analysis", "Variance Analysis", "Root Cause Analysis"],
            "answer": "Variance Analysis"
        },
        {
            "question": "What is the formula for calculating Schedule Performance Index (SPI)?",
            "options": ["SPI = EV / PV", "SPI = PV / EV", "SPI = EV / AC", "SPI = AC / EV"],
            "answer": "SPI = EV / PV"
        }
    ],

    "Web Accessibility": [
        {
            "question": "What is web accessibility?",
            "options": ["Ensuring websites are visually appealing", "Making websites usable for all people, including those with disabilities", "Creating websites that work only on mobile devices", "Designing websites to load faster"],
            "answer": "Making websites usable for all people, including those with disabilities"
        },
        {
            "question": "Which of the following is an example of an assistive technology for web accessibility?",
            "options": ["Screen readers", "High-definition monitors", "Web browsers", "HTML5 video players"],
            "answer": "Screen readers"
        },
        {
            "question": "Why is providing text alternatives for non-text content important in web accessibility?",
            "options": ["To improve website performance", "To provide access to people who cannot see the content", "To make the website look more professional", "To reduce the file size of images"],
            "answer": "To provide access to people who cannot see the content"
        },
        {
            "question": "Which HTML tag is used to provide text alternatives for images?",
            "options": ["<alt>", "<img>", "<a>", "<alt-text>"],
            "answer": "<img>"
        },
        {
            "question": "What does the acronym WCAG stand for in the context of web accessibility?",
            "options": ["Web Content Accessibility Guidelines", "World Coding and Accessibility Guidelines", "Web Communication and Accessibility Group", "Wide Compatibility Accessibility Grid"],
            "answer": "Web Content Accessibility Guidelines"
        }
    ],

    "Computer Networking - Wired and Wireless Networks and Protocols": [
        {
            "question": "What is the main difference between wired and wireless networks?",
            "options": [
                "Wired networks are slower than wireless networks.",
                "Wireless networks require cables for connectivity.",
                "Wired networks use physical cables to transmit data, while wireless networks use radio waves.",
                "Wireless networks are only used for mobile devices."
            ],
            "answer": "Wired networks use physical cables to transmit data, while wireless networks use radio waves."
        },
        {
            "question": "Which of the following protocols is used to ensure secure communication over a wireless network?",
            "options": [
                "HTTP",
                "FTP",
                "WPA2",
                "TCP"
            ],
            "answer": "WPA2"
        },
        {
            "question": "What is the maximum data transfer rate of a typical Ethernet cable (Cat 5e)?",
            "options": [
                "100 Mbps",
                "1 Gbps",
                "10 Gbps",
                "100 Gbps"
            ],
            "answer": "1 Gbps"
        },
        {
            "question": "Which of the following is a characteristic of a Wi-Fi network?",
            "options": [
                "It requires a direct physical connection between devices.",
                "It uses infrared signals for communication.",
                "It allows devices to connect wirelessly through radio waves.",
                "It is only used for local area networks (LANs)."
            ],
            "answer": "It allows devices to connect wirelessly through radio waves."
        },
        {
            "question": "Which of the following networking protocols is responsible for routing data between devices on different networks?",
            "options": [
                "TCP",
                "IP",
                "UDP",
                "SMTP"
            ],
            "answer": "IP"
        }
    ],

    "Fundamentals of Data structure in C": [
        {
            question: "What is the primary function of a stack data structure?",
            options: ["Store elements in a linear fashion", "Allow access to elements randomly", "Follow Last-In, First-Out (LIFO) principle", "Follow First-In, First-Out (FIFO) principle"],
            answer: "Follow Last-In, First-Out (LIFO) principle"
        },
        {
            question: "Which of the following is the correct way to declare a linked list node in C?",
            options: ["struct node { int data; struct node* next; }", "node { int data; node* next; }", "struct node { int data; }", "struct node { int data, next; }"],
            answer: "struct node { int data; struct node* next; }"
        },
        {
            question: "What is the time complexity of accessing an element in an array by index?",
            options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
            answer: "O(1)"
        },
        {
            question: "Which of the following operations is not possible in a queue?",
            options: ["Enqueue", "Dequeue", "Random access", "Peek"],
            answer: "Random access"
        },
        {
            question: "In a binary search tree, what is the property of each node?",
            options: ["The left child is greater than the node", "The left child is smaller than the node", "The right child is greater than the node", "Both left and right children are equal to the node"],
            answer: "The left child is smaller than the node"
        }
    ],

    "Trust and security with Google Cloud": [
        {
            "question": "Which Google Cloud service provides a centralized view of security and compliance status?",
            "options": ["Google Cloud Armor", "Google Cloud Security Command Center", "Google Identity", "Google Cloud Key Management"],
            "answer": "Google Cloud Security Command Center"
        },
        {
            "question": "What is the purpose of Google Cloud's Identity-Aware Proxy (IAP)?",
            "options": ["Protect data in transit", "Control access to applications", "Encrypt data at rest", "Monitor cloud security events"],
            "answer": "Control access to applications"
        },
        {
            "question": "Which encryption method does Google Cloud use to secure data at rest by default?",
            "options": ["AES-128", "AES-256", "RSA-2048", "Triple DES"],
            "answer": "AES-256"
        },
        {
            "question": "What is Google Cloud's primary service for managing identity and access?",
            "options": ["Google Identity", "Cloud Identity Platform", "Google Cloud IAM", "Cloud Security Command Center"],
            "answer": "Google Cloud IAM"
        },
        {
            "question": "Which feature of Google Cloud helps ensure compliance with security frameworks like GDPR and HIPAA?",
            "options": ["Google Cloud Armor", "Google Cloud Security Center", "Google Cloud Compliance", "Google Cloud Identity & Access Management"],
            "answer": "Google Cloud Compliance"
        }
    ]
}

const addCourse = async () => {
    try {
        for (const course of courses) {
            const quizzesForCourse = quizzes[course.title] || []; // Get quizzes for the course
            console.log("Quizzes for course:", quizzesForCourse); // Debugging line

            const courseRef = db.collection('courses').where('title', '==', course.title);
            const snapshot = await courseRef.get();

            if (snapshot.empty) {
                // Course does not exist, add it with quizzes
                const docRef = await db.collection('courses').add({
                    ...course,
                    quizzes: quizzesForCourse
                });
                console.log(`Course added with ID: ${docRef.id}`);
            } else {
                // Course exists, update it with quizzes
                snapshot.forEach(async (doc) => {
                    const existingCourse = doc.data();
                    const existingQuizzes = existingCourse.quizzes || []; // Get existing quizzes or default to empty array

                    // Merge new quizzes with existing quizzes, avoiding duplicates
                    const updatedQuizzes = [...existingQuizzes];
                    for (const newQuiz of quizzesForCourse) {
                        const isDuplicate = existingQuizzes.some(
                            (existingQuiz) => existingQuiz.question === newQuiz.question
                        );
                        if (!isDuplicate) {
                            updatedQuizzes.push(newQuiz);
                        }
                    }

                    // Update the course with the merged quizzes
                    await db.collection('courses').doc(doc.id).update({
                        quizzes: updatedQuizzes
                    });
                    console.log(`Quizzes updated for existing course: ${course.title}`);
                });
            }
        }
        console.log("All courses processed successfully!");
    } catch (error) {
        console.error("Error processing courses: ", error);
    }
};


addCourse();