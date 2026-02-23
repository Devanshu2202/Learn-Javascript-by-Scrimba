function getLabelsHtml(text, sender, ...workers) {

return workers.map((worker)=>{
    return `<div class="label-card">
    <p>Dear ${worker.name} </p>
    <p>${text}</p>
    <p>Best wishes,</p>
    <p>${sender}</p>
</div>`
    
}).join("")



}

const text = 'Thank you for all your hard work throughout the year! 🙏🎁'
const sender = 'Tom'

document.getElementById('labels-container').innerHTML = getLabelsHtml(
    text, 
    sender, 
    {name: 'Sally'}, 
    {name: 'Mike'}, 
    {name: 'Rob'}, 
    {name: 'Harriet'}
    ) 