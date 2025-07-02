document.addEventListener('DOMContentLoaded', function() {
const chatBox = document.getElementById('chatMessages');
const userInput = document.getElementById('userMessage');
const sendButton = document.getElementById('send-button');
const messengerIcon = document.querySelector('.messenger-icon');
const chatboxContainer = document.querySelector('.chatbox-container');
const closeButton = document.querySelector('.close-button');
const refreshButton = document.querySelector('.refresh-button');

    closeButton.addEventListener('click', closeChatbox);
    function closeChatbox() {
        chatBox.innerHTML = '';
        chatboxContainer.style.display = 'none';
    }
    refreshButton.addEventListener('click', function() {
        chatBox.innerHTML = ''; // Clear chat history
        sendGreetingMessage();
    });
     // Add click event listener to the messengerIcon
     messengerIcon.addEventListener('click', function() {
        
        // Toggle visibility of the chatbox container
        if (chatboxContainer.style.display === 'none' || !chatboxContainer.style.display) {
            chatboxContainer.style.display = 'block';
            // Focus on the user input box
            userInput.focus();
            sendGreetingMessage();
        } else {
            chatboxContainer.style.display = 'none';
        }
        userInput.addEventListener('keydown', function(event) {
            // Check if the Enter key is pressed
            if (event.key === 'Enter')sendMessage(); {               
            }
        });
    
    });

    sendButton.addEventListener('click', sendMessage);{

   function sendMessage() {
    const message = userInput.value.trim();
    if (!message) return;

    // Display user message immediately
    displayUserMessage(message);

    // Simple keyword responses (no backend needed)
    if (message.toLowerCase().includes('login')) {
        displayBotMessage("Login page: <a href='/login.html'>Click here</a>");
    }
    else if (message.toLowerCase().includes('register')) {
        displayBotMessage("Registration page: <a href='/register.html'>Click here</a>");
    }
    else if (message.includes('hello') || message.includes('hi')) {
        displayBotMessage("Hello! How can I help you today?");
    }
    else if (message.includes('what is your name') || message.includes('who are you')) {
        displayBotMessage("I am a Mira.");
    }
    else if (message.includes('how are you') || message.includes('what are you doing')) {
        displayBotMessage("I am fine, thanks for asking!");
    }
    else if (message.includes('how can you assist me') || message.includes('how can you help me')) {
        displayBotMessage("I can assist you providing answers to your questions, and giving general information.");
    }
    else if (message.includes('what is the weather today') || message.includes('do you know how is the todays weather')) {
        displayBotMessage("I'm sorry, I cannot provide weather information at the moment.");
    }
    else if (message.includes('why did I choose this college') || message.includes('do you know why did I join this college')) {
        displayBotMessage("You choose to attend MCE because of its outstanding academic programs, vibrant campus life, and strong industry connections, all of which align perfectly with your educational and career goals.");
    }
    else {
        displayBotMessage("I'm a demo chatbot. Try saying 'login', 'register', or 'hello'");
    }

    // Clear input
    userInput.value = '';
}

        displayUserMessage(message);
        var tags = {
            "participation": ['participate', 'ATL', 'Marathon'],
            "submission": ['submit', 'application', 'ATL Marathon'],
            "rewards": ['rewards', 'top', 'teams', 'reward'],
            "deadline": ['deadline', 'submitting', 'entries'],
            "certificate": ['participating', 'certificate', 'receive'],
            "multipleEntries": ['team', 'submit', 'entries', 'problem statement'],
            "teamLimit": ['limit', 'number', 'participate', 'school'],
            "requiredDocuments": ['documents', 'required', 'online', 'application', 'submission'],
            "support": ['support', 'student teams'],
            "teamComposition": ['composition', 'team', 'ideal'],
            "individualEntry": ['individual', 'member', 'entry', 'allowed'],
            "specialCertificates": ['special', 'certificates', 'high number', 'participating', 'teams'],
            "submitIdea": ['submit', 'idea']
            // Add more tags and related words as needed
        };
        var mostSpecificTag = null;
        var mostSpecificWords = [];

        for (var tag in tags) {
            if (tags.hasOwnProperty(tag)) {
                var words = tags[tag];
                // Check if any word from the tag is present in the message
                var matchingWords = words.filter(word => new RegExp("\\b" + word + "\\b", "i").test(message));
                // If there is a match and it's more specific than the current one, update the most specific tag
                if (matchingWords.length > 0 && matchingWords.length > mostSpecificWords.length) {
                    mostSpecificTag = tag;
                    mostSpecificWords = matchingWords;
                }
            }
        }
        if (mostSpecificTag !== null) {
            switch (mostSpecificTag) {
                case "participation":
                    displayBotMessage("All students from classes 6th to 12th in schools across India are eligible to participate.");
                    displayFeedbackMessage();
                    break;
                case "submission":
                    displayBotMessage("You can submit your application in your student profile.");
                    displayFeedbackMessage();
                    break;
                case "rewards":
                    displayBotMessage("The top teams will receive internships through the Student Innovator Program with leading corporates of India, certificates from AIM, NITI Aayog, and many more interesting opportunities at the conclusion of the Marathon.");
                    displayFeedbackMessage();
                    break;
                case "deadline":
                    displayBotMessage("The last date to submit entries is November 30th, 2024, 11:59 PM.");
                    displayFeedbackMessage();
                    break; 
                case "certificate":
                    displayBotMessage("Yes, all participating students will receive a certificate of Participation from AIM, NITI Aayog.");
                    displayFeedbackMessage();
                    break;
                case "multipleEntries":
                    displayBotMessage("Yes, a team may submit entries for more than one problem statement. However, a separate application form must be filled out for each problem statement.");
                    displayFeedbackMessage();
                    break;
                case "teamLimit":
                    displayBotMessage("No, there is no limit. Maximum number of teams from every school is encouraged.");
                    displayFeedbackMessage();
                    break; 
                case "requiredDocuments":
                    displayBotMessage(" The online application form submission will include a research document (description of the innovation/solution) and a video submission (capturing a 360-degree view of the working prototype/solution).");
                    displayFeedbackMessage();
                    break; 
                case "support":
                    displayBotMessage("School in-charge, school teachers, mentors of change, alumni, and external mentors from the local school ecosystem may support the student teams.");
                    break; 
                case "teamComposition":
                    displayBotMessage("Each team should consist of a maximum of 3 students (class 6th to 12th). ATL schools are encouraged to include other school and/or community students in the team composition.");
                    displayFeedbackMessage();
                    break; 
                case "individualEntry":
                    displayBotMessage("No, individual member entry is not allowed. Teams must consist of a minimum of 2 members.");
                    displayFeedbackMessage();
                    break; 
                case "specialCertificates":
                    displayBotMessage("Yes, special certificates from AIM, NITI Aayog will be given to all schools that have more than 25 teams participating in the School Innovation Marathon.");
                    displayFeedbackMessage();
                    break;
                case "submitIdea":
                    displayBotMessage("Before submitting your idea, ensure it's well thought out and clearly articulated. Consider its feasibility, potential impact, and any unique aspects. <a href='https://youtu.be/HufI5CnhkfU' target='_blank'>Click here</a> for detailed info");
                    displayFeedbackMessage();
                    break;                      
                // Add more cases for other tags as needed
                default:
                    break;
            }
            userInput.value = ''; // Clear user input
            return; // Exit the function
        }

    
    
        // Send user input to the server for processing
        fetch('/send-message', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: message })
        })
        .then(response => {
            // Check if response is empty
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Response from server:', data); // Debugging statement
            if (data && data.response) {
                displayBotMessage(data.response);
                // Generate options
                if (data.intent === 'greeting') {
                    setTimeout(function() {
                        displayOptions();
                    }, 500);
                }
            } else {
                console.error('Invalid response from server:', data); // Debugging statement
            }
        });
    
        userInput.value = '';
    }
    
    function sendGreetingMessage() {
        fetch('/send-message', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: 'greeting' })
        })
        .then(response => {
            // Check if response is empty
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Response from server:', data); // Debugging statement
            if (data && data.response) {
               
                // Display bot's response if it exists
                setTimeout(function() {
                  
                displayBotMessage(data.response);
                 // Generate options
                displayOptions();
            },500);
            } else {
                console.error('Invalid response from server:', data); // Debugging statement
            }
           
        });
        
        
    }
    
   
    function displayOptions() {
        const options = ['Teacher', 'Student']; // List of options
        var firstOption = true; // Flag to track the first option
    
        options.forEach(function(optionText) {
            var optionContainer = document.createElement('div');
            optionContainer.classList.add('option-container');
    
            var optionElement = document.createElement('div');
            optionElement.textContent = optionText;
            optionElement.classList.add('option');
    
            if (firstOption) {
                optionElement.style.marginLeft = '30px'; // Apply left margin only to the first option
                firstOption = false; // Reset flag after applying margin once
            }
    
            optionElement.addEventListener('click', function() {
                displayUserMessage(optionText);
                setTimeout(function() {
                    fetchBotResponse(optionText);
                }, 500);
            });
    
            optionElement.addEventListener('mouseover', function() {
                optionElement.style.backgroundColor = 'crimson';
                optionElement.style.color = 'white';
            });
    
            optionElement.addEventListener('mouseout', function() {
                optionElement.style.backgroundColor = 'white';
                optionElement.style.color = 'crimson';
            });
    
            optionContainer.appendChild(optionElement);
            chatBox.appendChild(optionContainer);
        });
    
        chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom of the chat box
    }
    
    
   
    function displaySuboptions1() {
        const subOptions = ['Portal', 'Program queries']; // List of sub-options
        var firstOption = true; // Flag to check if it's the first sub-option
    
        subOptions.forEach(function(optionText) {
            var optionContainer = document.createElement('div');
            optionContainer.classList.add('option-container');
    
            var optionElement = document.createElement('div');
            optionElement.textContent = optionText;
            optionElement.classList.add('option');
    
            if (firstOption) {
                optionElement.style.marginLeft = '30px'; // Apply left margin only to the first option
                firstOption = false; // Reset flag after applying margin once
            }
    
            optionElement.addEventListener('click', function() {
                displayUserMessage(optionText);
                setTimeout(function() {
                    fetchBotResponse_new(optionText);
                }, 500);
            });
    
    
            optionElement.addEventListener('mouseover', function() {
                optionElement.style.backgroundColor = 'crimson';
                optionElement.style.color = 'white';
            });
    
            optionElement.addEventListener('mouseout', function() {
                optionElement.style.backgroundColor = 'white';
                optionElement.style.color = 'crimson';
            });
    
            optionContainer.appendChild(optionElement);
            chatBox.appendChild(optionContainer);
        });
    
        chatBox.scrollTop = chatBox.scrollHeight; // Ensure the chat box scrolls to display the latest added elements
    }

    function displaySuboptions2() {
        const subOptions = ['About SIM', 'Road map','Themes','Prizes and Recognitions']; // List of sub-options
        var firstOption = true; // Flag to check if it's the first sub-option
    
        subOptions.forEach(function(optionText) {
            var optionContainer = document.createElement('div');
            optionContainer.classList.add('option-container');
    
            var optionElement = document.createElement('div');
            optionElement.textContent = optionText;
            optionElement.classList.add('option');
    
            if (firstOption) {
                optionElement.style.marginLeft = '30px'; // Apply left margin only to the first option
                firstOption = false; // Reset flag after applying margin once
            }
    
            optionElement.addEventListener('click', function() {
                displayUserMessage(optionText);
                setTimeout(function() {
                    fetchBotResponse_questions(optionText);
                }, 500);
            });
    
    
            optionElement.addEventListener('mouseover', function() {
                optionElement.style.backgroundColor = 'crimson';
                optionElement.style.color = 'white';
            });
    
            optionElement.addEventListener('mouseout', function() {
                optionElement.style.backgroundColor = 'white';
                optionElement.style.color = 'crimson';
            });
    
            optionContainer.appendChild(optionElement);
            chatBox.appendChild(optionContainer);
        });
    
        chatBox.scrollTop = chatBox.scrollHeight; // Ensure the chat box scrolls to display the latest added elements
    }

    function displaySuboptions_questions() {
        const subOptions = [
            'What is the School Innovation Marathon?',
            'Who organizes the School Innovation Marathon?',
            'Is ATL Marathon and SIM the same?',
            'How does the program integrate with existing school programs?',
            'Can students from all grades participate?',
            'Are there special certificates for schools with a high number of participating teams?',
            'Is there a limit on the number of teams that can participate from a school?'
        ]; // List of sub-options
    
        subOptions.forEach(function(optionText, index) {
            const optionContainer = document.createElement('div');
            const optionElement = document.createElement('div');
    
            optionContainer.classList.add('option-container');
            optionElement.classList.add('option');
            optionElement.textContent = optionText;
            optionElement.style.marginLeft = index === 0 ? '30px' : '0px'; // Apply left margin only to the first option
    
            // Click event to display user message and fetch bot response
            optionElement.addEventListener('click', function() {
                displayUserMessage(optionText);
                setTimeout(() => fetchBotResponse_questions(optionText), 500);
            });
    
            // Hover effect events
            optionElement.addEventListener('mouseover', () => setOptionStyles(optionElement, 'crimson', 'white'));
            optionElement.addEventListener('mouseout', () => setOptionStyles(optionElement, 'white', 'crimson'));
    
            optionContainer.appendChild(optionElement);
            chatBox.appendChild(optionContainer);
        });
    
        chatBox.scrollTop = chatBox.scrollHeight; // Ensure the chat box scrolls to display the latest added elements
    }
    function displaySuboptions_roadmap() {
        const subOptions = [
            'What is the Road Map for SIM ?',
        'What are time lines for the program ?',
        
        ]; // List of sub-options
    
        subOptions.forEach(function(optionText, index) {
            const optionContainer = document.createElement('div');
            const optionElement = document.createElement('div');
    
            optionContainer.classList.add('option-container');
            optionElement.classList.add('option');
            optionElement.textContent = optionText;
            optionElement.style.marginLeft = index === 0 ? '30px' : '0px'; // Apply left margin only to the first option
    
            // Click event to display user message and fetch bot response
            optionElement.addEventListener('click', function() {
                displayUserMessage(optionText);
                setTimeout(() => fetchBotResponse_roadmap(optionText), 500);
            });
    
            // Hover effect events
            optionElement.addEventListener('mouseover', () => setOptionStyles(optionElement, 'crimson', 'white'));
            optionElement.addEventListener('mouseout', () => setOptionStyles(optionElement, 'white', 'crimson'));
    
            optionContainer.appendChild(optionElement);
            chatBox.appendChild(optionContainer);
        });
    
        chatBox.scrollTop = chatBox.scrollHeight; // Ensure the chat box scrolls to display the latest added elements
    }
    function displaySuboptions_themes() {
        const subOptions = [
            'What Are themes for Idea Submission in SIM ?',
        'Can students submit ideas beyond these themes?',
        
        ]; // List of sub-options
    
        subOptions.forEach(function(optionText, index) {
            const optionContainer = document.createElement('div');
            const optionElement = document.createElement('div');
    
            optionContainer.classList.add('option-container');
            optionElement.classList.add('option');
            optionElement.textContent = optionText;
            optionElement.style.marginLeft = index === 0 ? '30px' : '0px'; // Apply left margin only to the first option
    
            // Click event to display user message and fetch bot response
            optionElement.addEventListener('click', function() {
                displayUserMessage(optionText);
                setTimeout(() => fetchBotResponse_themes(optionText), 500);
            });
    
            // Hover effect events
            optionElement.addEventListener('mouseover', () => setOptionStyles(optionElement, 'crimson', 'white'));
            optionElement.addEventListener('mouseout', () => setOptionStyles(optionElement, 'white', 'crimson'));
    
            optionContainer.appendChild(optionElement);
            chatBox.appendChild(optionContainer);
        });
    
        chatBox.scrollTop = chatBox.scrollHeight; // Ensure the chat box scrolls to display the latest added elements
    }
    function displaySuboptions_prizes() {
        const subOptions = [
            'What are the key benefits of participating in this program?',
        'Are there special certificates for schools with a high number of participating teams?',
        'What are the Prize and recognitions for top teams ? ',
        
        ]; // List of sub-options
    
        subOptions.forEach(function(optionText, index) {
            const optionContainer = document.createElement('div');
            const optionElement = document.createElement('div');
    
            optionContainer.classList.add('option-container');
            optionElement.classList.add('option');
            optionElement.textContent = optionText;
            optionElement.style.marginLeft = index === 0 ? '30px' : '0px'; // Apply left margin only to the first option
    
            // Click event to display user message and fetch bot response
            optionElement.addEventListener('click', function() {
                displayUserMessage(optionText);
                setTimeout(() => fetchBotResponse_prizes(optionText), 500);
            });
    
            // Hover effect events
            optionElement.addEventListener('mouseover', () => setOptionStyles(optionElement, 'crimson', 'white'));
            optionElement.addEventListener('mouseout', () => setOptionStyles(optionElement, 'white', 'crimson'));
    
            optionContainer.appendChild(optionElement);
            chatBox.appendChild(optionContainer);
        });
    
        chatBox.scrollTop = chatBox.scrollHeight; // Ensure the chat box scrolls to display the latest added elements
    }
    // Helper function to set styles on hover
    function setOptionStyles(element, bgColor, textColor) {
        element.style.backgroundColor = bgColor;
        element.style.color = textColor;
    }
    
    function displayUserMessage(message) {
        // Create a container for the user message and image
        var messageContainer = document.createElement('div');
        messageContainer.classList.add('user-message-container');
    
        // Create the user image element
        var userImage = document.createElement('img');
        userImage.src = 'assests/userimage2.png'; // Updated path
        userImage.classList.add('user-image');
    
        // Create the user message element
        var messageElement = document.createElement('p');
        messageElement.textContent = message;
        messageElement.classList.add('user-message');
        messageElement.style.color = 'white';
    
        // Append the user image and message to the container
        
        messageContainer.appendChild(messageElement);
        messageContainer.appendChild(userImage);
    
        // Append the container to the chat box
        chatBox.appendChild(messageContainer);
        chatBox.scrollTop = chatBox.scrollHeight;
    }
    
    function displayBotMessage(message, color) {
        // Create a container for the bot message and image
        var messageContainer = document.createElement('div');
        messageContainer.classList.add('bot-message-container');
    
        // Create the bot image element
        var botImage = document.createElement('img');
        botImage.src = 'assests/Mira_black.png'; // Updated path
        botImage.classList.add('bot-image');
    
        // Create the bot message element
        var messageElement = document.createElement('p');
        messageElement.innerHTML = message.replace(/\n/g, "<br>");
        messageElement.classList.add('bot-message');
        messageElement.style.color = 'white';

        var whiteLinks = messageElement.querySelectorAll('a');
        whiteLinks.forEach(function(link) {
            link.style.color = 'white';
        });

    
        // Append the bot image and message to the container
        messageContainer.appendChild(botImage);
        messageContainer.appendChild(messageElement);
    
        // Append the container to the chat box
        chatBox.appendChild(messageContainer);
        chatBox.scrollTop = chatBox.scrollHeight;
        
    }
    
    function displayFeedbackMessage() {
        // Create feedback options container
        var feedbackContainer = document.createElement('div');
        feedbackContainer.classList.add('feedback-container');
    
        // Create feedback message
        var feedbackMessage = document.createElement('p');
        feedbackMessage.textContent = "Was I able to answer your question?";
        feedbackContainer.appendChild(feedbackMessage);
    
        // Create like button
        var likeButton = document.createElement('button');
        likeButton.textContent = "👍";
        likeButton.classList.add('feedback-button');
        likeButton.addEventListener('click', function() {
            displayUserMessage('👍');
            setTimeout(function() {
                fetchFeedbackResponse('like');
            }, 500);
        });
        feedbackContainer.appendChild(likeButton);
    
        // Create dislike button
        var dislikeButton = document.createElement('button');
        dislikeButton.textContent = "👎";
        dislikeButton.classList.add('feedback-button');
        dislikeButton.addEventListener('click', function() {
            displayUserMessage('👎');
            setTimeout(function() {
                fetchFeedbackResponse('dislike');
            }, 500);
        });
        feedbackContainer.appendChild(dislikeButton);
    
        // Append feedback options container to the chat box
        chatBox.appendChild(feedbackContainer);
        chatBox.scrollTop = chatBox.scrollHeight;
    }
    
   
    
    function displayOption(optionText) {
        var optionContainer = document.createElement('div');
        optionContainer.classList.add('option-container');
        optionContainer.style.marginLeft = '30px'
    
        var optionElement = document.createElement('div');
        optionElement.textContent = optionText;
        optionElement.classList.add('option');
        optionElement.style.marginBottom = '10px';
        
        
        
        optionElement.addEventListener('click', function() {
            // Display user message
            displayUserMessage(optionText);
            // Fetch bot response
           setTimeout(function() {
            fetchBotResponse(optionText);
           },500);
        });
    
    
        optionElement.addEventListener('mouseover', function() {
            optionElement.style.backgroundColor = 'crimson';
            optionElement.style.color = 'white';
        });
    
        optionElement.addEventListener('mouseout', function() {
            optionElement.style.backgroundColor = 'white';
            optionElement.style.color = 'crimson';
        });
    
        optionContainer.appendChild(optionElement);
        chatBox.appendChild(optionContainer);
        chatBox.scrollTop = chatBox.scrollHeight;
    }
    function fetchBotResponse(optionText) {
        // You can customize this function to fetch appropriate responses based on selected option
        var botResponse = '';
        var link = '';
        if (optionText.toLowerCase() === 'teacher' || 'student') {
            botResponse = "what is your query regarding?";
            displayBotMessage(botResponse);
            displaySuboptions1();
        }
       
    
    }
    function fetchBotResponse_new(optionText) {
        // You can customize this function to fetch appropriate responses based on selected option
        var botResponse = '';
        var link = '';
        if (optionText.toLowerCase() === 'program queries' || 'portal') {
            botResponse = "Here are the categories";
            displayBotMessage(botResponse);
            displaySuboptions2();
        } 
      
    
    }
    function fetchBotResponse_questions(optionText) {
        var botResponse = '';
    
        // Define answers for each specific question
        var answers = {
            'What is the School Innovation Marathon?': "The School Innovation Marathon is a nationwide initiative aimed at unleashing the creative potential of students across India It encourages student innovation and agency to tackle critical local and global challenges.",
            'Who organizes the School Innovation Marathon?': "The Marathon is spearheaded by Ministry of Education, Atal Innovation Mission-NITI Aayog, AICTE, UNICEF, YUWAAH, Seventh Sense and Inqui-Lab Foundation.",
            'Is ATL Marathon and SIM the same?': "Yes, both of them are the same. SIM was earlier called as ATL Marathon.",
            'How does the program integrate with existing school programs?': "The School Innovation Marathon (SIM) integrates with existing school programs by providing a structured framework that complements and enhances current educational initiatives. Here's how it integrates: 1. Curriculum Integration: SIM themes and activities can be aligned with the school's curriculum to provide practical, real-world applications of classroom learning. Teachers can incorporate innovation challenges into their lessons to enrich student engagement. 2. Project-Based Learning: The program supports project-based learning by encouraging students to develop and submit ideas based on specific themes. This approach allows students to apply their knowledge and skills to real-world problems, fostering critical thinking and creativity. 3. Teacher Support: Teachers can use the SIM platform to track student progress, access resources, and manage team activities. This support helps them integrate the program smoothly into their existing responsibilities. 4. Student Development: SIM provides students with opportunities to work collaboratively, develop problem-solving skills, and engage in hands-on projects. These experiences complement their academic development and help build skills relevant to future careers. 5. Enhanced Engagement: By participating in SIM, schools can enhance student motivation and engagement through innovative and relevant activities that go beyond traditional classroom experiences. Overall, SIM is designed to be flexible and adaptable, allowing schools to integrate it into their existing programs while enhancing the educational experience for both teachers and students.",
            'Can students from all grades participate?': "The School Innovation Marathon (SIM) is specifically designed for students from Grades 6 to 12.",
            'Are there special certificates for schools with a high number of participating teams?': "Yes, special certificates from AIM, NITI Aayog will be given to all schools that have more than 25 teams participating in the School Innovation Marathon.",
            'Is there a limit on the number of teams that can participate from a school?': "No, there is no limit. The maximum number of teams from every school is encouraged."
        };
       
       
    
        // Check if the clicked option is in the predefined questions list
        if (answers[optionText]) {
            botResponse = answers[optionText]; // Get the answer corresponding to the question
            displayBotMessage(botResponse); 
            displaySuboptions2();// Display the answer
        } else if (optionText.toLowerCase() === 'about sim') {
            botResponse = "Questions";
            displayBotMessage(botResponse);
            displaySuboptions_questions();
             // Display sub-options for questions related to 'About SIM'
        } else if (optionText.toLowerCase() === 'road map') {
            botResponse = "Questions";
            displayBotMessage(botResponse);
            displaySuboptions_roadmap(); // Display sub-options for questions related to 'Road Map'
        }
        else if (optionText.toLowerCase() === 'themes') {
            botResponse = "Questions";
            displayBotMessage(botResponse);
            displaySuboptions_themes(); // Display sub-options for questions related to 'Road Map'
        }
        else if (optionText.toLowerCase() === 'prizes and recognitions') {
            botResponse = "Questions";
            displayBotMessage(botResponse);
            displaySuboptions_prizes(); // Display sub-options for questions related to 'Road Map'
        }
        
    }
    
    function fetchBotResponse_roadmap(optionText) {
        var botResponse = '';
    
        // Define answers for each specific roadmap question
        var answers = {
             'What is the Road Map for SIM ?': "1. Phase 1 - School Innovation Marathon Launch \n 2. Phase 2 - Registration of Teachers and Students \n 3. Phase 3 - Student Learning Journey & Idea Submission \n 4. Phase4 - Winners Announcement and Student Internship Program (SIP)\n5. Phase 5 - SEP (Student Entrepreneurship Program)",
            'What are time lines for the program ?': "The timelines for the School Innovation Marathon 2024-25 are as follows: \n July 29, 2024 – Launch of the School Innovation Marathon 2024-2025\n The program officially starts on this date with a nationwide rollout.\n July - November 2024 – Innovation & Prototyping Phase\n During this period, students work on identifying problems, conducting research, ideating, innovating, and developing prototypes.\n November 30, 2024 – Last Day to Submit Projects \n This is the deadline for students to submit their innovative projects for review. \n January 2025 – Announcement of Top 1000 Teams \n The best 1000 student teams will be selected and announced based on their submitted projects. \n March 2025 – Funding Support for Top Teams \n The top teams will receive financial support to further develop their projects and take them to the next level. \n May 2025 – Internships for Top Teams \n The most promising teams will be offered internships, providing them real-world exposure and experience to further refine their innovations."
            
        };
    
        // Check if the clicked option is in the predefined questions list
        if (answers[optionText]) {
            botResponse = answers[optionText]; // Get the answer corresponding to the question
            displayBotMessage(botResponse); // Display the answer
        } else {
            botResponse = "I don't have information on that question.";
            displayBotMessage(botResponse);
            displaySuboptions_themes();
        }
        displaySuboptions2();
    }

    function fetchBotResponse_themes(optionText) {
        var botResponse = '';
    
        // Define answers for each specific roadmap question
        var answers = {
            'What Are themes for Idea Submission in SIM ?': "The themes for Idea Submission in the School Innovation Marathon (SIM) are:\n 1. Digital Transformation \n 2. Quality Education \n 3. Economic Empowerment \n 4. Health and Well-Being \n 5. Cultural Heritage and Creativity \n 6. Smart and Resilient Communities\n 7. Sustainable Development\n 8. Others",
            'Can students submit ideas beyond these themes?': "The timelines for the School Innovation Marathon 2024-25 are as follows: \n July 29, 2024 – Launch of the School Innovation Marathon 2024-2025\n The program officially starts on this date with a nationwide rollout.\n July - November 2024 – Innovation & Prototyping Phase\n During this period, students work on identifying problems, conducting research, ideating, innovating, and developing prototypes.\n November 30, 2024 – Last Day to Submit Projects \n This is the deadline for students to submit their innovative projects for review. \n January 2025 – Announcement of Top 1000 Teams \n The best 1000 student teams will be selected and announced based on their submitted projects. \n March 2025 – Funding Support for Top Teams \n The top teams will receive financial support to further develop their projects and take them to the next level. \n May 2025 – Internships for Top Teams \n The most promising teams will be offered internships, providing them real-world exposure and experience to further refine their innovations."
           
        };
    
        // Check if the clicked option is in the predefined questions list
        if (answers[optionText]) {
            botResponse = answers[optionText]; // Get the answer corresponding to the question
            displayBotMessage(botResponse); // Display the answer
        } else {
            botResponse = "I don't have information on that question.";
            displayBotMessage(botResponse);
            displaySuboptions_themes();
        }
        displaySuboptions2();
    }

    function fetchBotResponse_prizes(optionText) {
        var botResponse = '';
    
        // Define answers for each specific roadmap question
        var answers = {
            'What are the key benefits of participating in this program?': "Participating in the School Innovation Marathon (SIM) offers several key benefits: \n 1. Enhanced Learning Opportunities: Students gain practical experience in problem-solving and innovation through real-world challenges.\n 2. Skill Development: Participants develop critical skills such as teamwork, creative thinking, and project management. \n 3. Recognition and Certification: Successful participation and idea submissions can lead to certificates and recognition, highlighting achievements in innovation.\n 4. Exposure to New Ideas: The program encourages exploration of various themes, fostering creativity and broadening students' perspectives. \n 5. Networking Opportunities: Participants can connect with peers, educators, and professionals, expanding their network and potential opportunities for future collaborations. \n 6. Contribution to Society: Students have the chance to develop solutions that address real-world issues, contributing positively to their communities. \n 7. Support and Resources: Access to resources, mentorship, and support throughout the program helps guide and enhance the learning experience.",
            'Are there special certificates for schools with a high number of participating teams?': "Yes, special certificates from AIM, NITI Aayog will be given to all schools that have more than 25 teams participating in the School Innovation Marathon.",
            'What are the Prize and recognitions for top teams ? ' : "The prizes and recognitions for the top teams in the School Innovation Marathon 2024-25 include:\n Top 200 Teams – SEP: These teams will join the Student Entrepreneurship Program (SEP), receiving mentorship, resources, and industry connections to scale their ideas.\n Patenting Support: Selected teams will get patenting guidance from Innovation Centers and MIC, helping secure intellectual property rights.\n Special Recognition: Teams from rural government schools, aspirational districts, and children with special needs will receive additional recognition to encourage diverse participation.\n Special Certificates: The top 200 teams will be awarded certificates for their innovation achievements, providing a prestigious credential for future opportunities."
           
        };
    
        // Check if the clicked option is in the predefined questions list
        if (answers[optionText]) {
            botResponse = answers[optionText]; // Get the answer corresponding to the question
            displayBotMessage(botResponse); // Display the answer
        } else {
            botResponse = "I don't have information on that question.";
            displayBotMessage(botResponse);
            displaySuboptions_themes();
        }
        displaySuboptions2();
    }
function fetchFeedbackResponse(feedback) {
        if (feedback === 'like') {
            displayBotMessage('Thanks for your feedback. Is there anything else that I can help you with?', false);
            displayOptionsAfterFeedback();
        } else if (feedback === 'dislike') {
            displayBotMessage('Bot: I\'m sorry to hear that. Try again!.', false);
            setTimeout(function() {
                sendGreetingMessage();
            }, 500);
        }
    }
    function displayOptionsAfterFeedback() {
        // Display options for "Yes" and "No"
        var optionContainer = document.createElement('div');
        optionContainer.classList.add('option-container');
        optionContainer.style.marginLeft = '30px';
    
        // Option for "Yes"
        var yesOptionElement = document.createElement('div');
        yesOptionElement.textContent = 'Yes';
        yesOptionElement.classList.add('option');
        yesOptionElement.addEventListener('click', function() {
            displayUserMessage('Yes');
            sendGreetingMessage();
        });
        // Add event listener for hover effect
        yesOptionElement.addEventListener('mouseenter', function() {
            yesOptionElement.style.backgroundColor = 'crimson';
            yesOptionElement.style.color = 'white';
        });
        // Remove hover effect when mouse leaves
        yesOptionElement.addEventListener('mouseleave', function() {
            yesOptionElement.style.backgroundColor = 'white';
            yesOptionElement.style.color = 'crimson';
        });
        optionContainer.appendChild(yesOptionElement);
    
        // Option for "No"
        var noOptionElement = document.createElement('div');
        noOptionElement.textContent = 'No';
        noOptionElement.classList.add('option');
        noOptionElement.addEventListener('click', function() {
            displayUserMessage('No');
            setTimeout(function() {
                displayBotMessage('Thanks for visiting the chatbot. Feel free to ask questions.', false);
            }, 500);
        });
        // Add event listener for hover effect
        noOptionElement.addEventListener('mouseenter', function() {
            noOptionElement.style.backgroundColor = 'crimson';
            noOptionElement.style.color = 'white';
        });
        // Remove hover effect when mouse leaves
        noOptionElement.addEventListener('mouseleave', function() {
            noOptionElement.style.backgroundColor = 'white';
            noOptionElement.style.color = 'crimson';
        });
        optionContainer.appendChild(noOptionElement);
    
        // Append options container to the chat box
        chatBox.appendChild(optionContainer);
        chatBox.scrollTop = chatBox.scrollHeight;
    }
});