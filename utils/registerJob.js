
const CronJob = require("cron").CronJob;

const registerJob = (name, func, time)=>{
	console.log(`Starting ${name} job`)
	new CronJob(time, func, null, true, "Asia/Kathmandu").start()
	console.log(`Started ${name} job`)
}

module.exports = registerJob