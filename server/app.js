import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

app.use(bodyParser.json({ limit: "32mb", extended}));
app.use(bodyParser.urlencoded({ limit: "32mb", extended: true}));
app.use(cors());