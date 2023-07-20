require('dotenv').config()
const axios = require('axios')
const { Client } = require('@notionhq/client')


const notion = new Client({auth: process.env.NOTION_KEY})

//createNotionPage()

async function createNotionPage() {
    const data = {
        "parent": {
          "type": "database_id",
          "database_id": process.env.NOTION_DATABASE_ID
        },
        "properties": {
          "Name": {
            "title": [
              {
                "text": {
                  "content": "helo"
                }
              }
            ]
          }
        }
      }
  
      console.log(`Sending hello to Notion`)
      const response = await notion.pages.create( data )
      console.log(response)

      console.log("Operation Complete.")
}

async function getNotionPages() {
    const databaseId = process.env.NOTION_DATABASE_ID;
    const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: "Tags",
      select: {equals: "Quick Gainz"}
    },
  });
  console.log(response);
}

getNotionPages()

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtCVG6NvVHqa6JQBBsfa2BPrfOFOoW4qY",
  authDomain: "notioncharts-fba71.firebaseapp.com",
  projectId: "notioncharts-fba71",
  storageBucket: "notioncharts-fba71.appspot.com",
  messagingSenderId: "847361168716",
  appId: "1:847361168716:web:79d8ce697a6281eff3ebe9",
  measurementId: "G-3MMSXZS97J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);