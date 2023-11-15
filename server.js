const express = require('express');
const app = express();

app.use(express.json());

app.post('/estimate', (req, res) => {
    const { materials, labor, resources } = req.body;
    const estimatedCost = calculateEstimate(materials, labor, resources);
    res.json({ estimatedCost });
});

function calculateEstimate(materials, labor, resources) {
    // Placeholder logic for cost calculation
    return materials * 100 + labor * 80 + resources * 50;
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
