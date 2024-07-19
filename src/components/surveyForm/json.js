export const json = {
    "title": "House of gaming - Game survey",
    "description": "This survey was created to recommend you different free to play videogames depending on your answers.",
    "logo": "https://api.surveyjs.io/private/Surveys/files?name=83280c0e-46fe-47db-9881-cd075b577ed9",
    "logoWidth": "500px",
    "logoHeight": "300px",
    "logoPosition": "right",
    "completedHtml": "<h3>Thank you for completing the survey, we are selecting the right free to play video games for you...</h3>",
    "pages": [
     {
      "name": "page1",
      "elements": [
       {
        "type": "radiogroup",
        "name": "question1",
        "title": "How often do you play video games?",
        "choices": [
         {
          "value": "Daily",
          "text": "Daily"
         },
         {
          "value": "Twice a week",
          "text": "Twice a week"
         },
         {
          "value": "On the weekend",
          "text": "On the weekend"
         },
         {
          "value": "On holidays",
          "text": "On holidays"
         }
        ]
       }
      ]
     },
     {
      "name": "page2",
      "elements": [
       {
        "type": "tagbox",
        "name": "genre",
        "title": "Select your favorite game's genre",
        "isRequired": true,
        "choices": [
         {
          "value": "Shooter",
          "text": "Shooter"
         },
         {
          "value": "MOBA",
          "text": "MOBA"
         },
         {
          "value": "Racing",
          "text": "Racing"
         }
        ]
       }
      ]
     },
     {
      "name": "page3",
      "elements": [
       {
        "type": "radiogroup",
        "name": "question3",
        "title": "Which do you prefer to play games on?",
        "isRequired": true,
        "choices": [
         {
          "value": "Web Browser",
          "text": "Web browser"
         },
         {
          "value": "PC (Windows)",
          "text": "PC download"
         }
        ]
       }
      ]
     },
     {
      "name": "page4",
      "elements": [
       {
        "type": "text",
        "name": "question4",
        "title": "What do you expect from a free to play game?",
        "description": "Tell us about your preferences here."
       }
      ]
     },
     {
      "name": "page5",
      "elements": [
       {
        "type": "radiogroup",
        "name": "question5",
        "title": "I prefer playing...",
        "isRequired": true,
        "choices": [
         {
          "value": "Old games",
          "text": "Old games"
         },
         {
          "value": "New games",
          "text": "New games"
         },
         {
          "value": "No preference",
          "text": "No preference"
         }
        ]
       }
      ]
     }
    ]
   }
