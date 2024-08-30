const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [36, '� Substitution'],
    [47, '⚽ GOAL'],
    [61, '� Substitution'],
    [64, '� Yellow card'],
    [69, '� Red card'],
    [70, '� Substitution'],
    [72, '� Substitution'],
    [76, '⚽ GOAL'],
    [80, '⚽ GOAL'],
    [92, '� Yellow card'],
    ]);

    const events = [...new Set(gameEvents.values())]; //Set là một tập hợp các giá trị không trùng lặp
    console.log(events);

    gameEvents.delete(64);
    console.log(gameEvents);
    // -------------------------------------------------------------
    console.log(`An event happened, on average, every ${90 / gameEvents.size} minutes`);

    // -------------------------------------------------------------
    for (const [min, event] of gameEvents.entries()) {
        const half = min <= 45 ? 'FIRST' : 'SECOND';
        console.log(`[${half} HALF] ${min}: ${event}`);
    }

