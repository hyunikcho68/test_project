const express = require('express');
const os = require('os');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/api/metrics', (req, res) => {
    // Basic metrics from the OS module
    // In a real container, cgroups would be more accurate for 'container' limits,
    // but os.loadavg() and os.totalmem/freemem are good proxies for the node process view.

    // CPU Load (1, 5, 15 min averages)
    const loadAvg = os.loadavg();

    // Memory
    const totalMem = os.totalmem();
    const freeMem = os.freemem();
    const usedMem = totalMem - freeMem;
    const memUsagePercent = (usedMem / totalMem) * 100;

    // Uptime
    const uptime = os.uptime();

    res.json({
        cpu: {
            loadAvg: loadAvg,
            // Simple mock for "current" usage percentage if needed by UI can be derived 
            // or we just send load averages.
            // For a cooler demo, let's simulate a fluctuating generic CPU % based on load
            usagePercent: Math.min(100, (loadAvg[0] * 10) + (Math.random() * 5))
        },
        memory: {
            total: totalMem,
            free: freeMem,
            used: usedMem,
            usagePercent: memUsagePercent
        },
        uptime: uptime,
        timestamp: new Date().toISOString()
    });
});

app.listen(port, () => {
    console.log(`Monitoring dashboard listening at http://localhost:${port}`);
});
