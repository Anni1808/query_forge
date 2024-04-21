import  QueryController  from "../Controllers/controller";
import express, { Router } from "express";

const router = Router();

router.use(express.json());



router.post("/generate_query", QueryController.generateQuery);
router.post("/generate_mind_query",QueryController.generateMindQuery)


export default router;
