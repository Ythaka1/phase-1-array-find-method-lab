// code your solution here
function superbowlWin(record) {
    
    const winRecord = record.find(game => game.team === "Denver Broncos" && game.result === "W");
    
   
    return winRecord ? winRecord.year : undefined;
}

return winRecord ? winRecord.year : undefined;

  
