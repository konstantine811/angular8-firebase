import { Component, OnInit, ViewEncapsulation } from "@angular/core";

import * as firebase from "firebase/app";
import "firebase/firestore";

var config = {
  apiKey: "AIzaSyBdrxqDZWL6XVaL3F8pcdkTBIv1Owj5aok",
  authDomain: "fir-course-122a2.firebaseapp.com",
  databaseURL: "https://fir-course-122a2.firebaseio.com",
  projectId: "fir-course-122a2",
  storageBucket: "fir-course-122a2.appspot.com",
  messagingSenderId: "485204055168",
  appId: "1:485204055168:web:7198568c8972d2eef9c265",
  measurementId: "G-ESPMJRQJHV"
};

firebase.initializeApp(config);

const db = firebase.firestore();

const settings = {};

db.settings(settings);

@Component({
  selector: "about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"]
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    db.doc("courses/RV3FRkLPpxKoJFcPT6ai")
      .get()
      .then(snap => console.log(snap.data()));
  }
}
