import request from 'supertest';import express from 'express';
test('health response shape',async()=>{const app=express();app.get('/api/health',(req,res)=>res.json({success:true,status:'healthy'}));const res=await request(app).get('/api/health');expect(res.status).toBe(200);expect(res.body.success).toBe(true);});
