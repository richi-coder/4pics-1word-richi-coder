function checkWin(challenge, response) {
    const { puzzle, answer } = challenge;
    console.log("testing...", puzzle, answer, response)
    if (answer.toLowerCase() === response.dashboardResponse.join("").toLowerCase()) alert("WINNER!")
    return answer.length - 1 > response.dashboardResponse.filter(item => item !== null).length
}

export default checkWin;