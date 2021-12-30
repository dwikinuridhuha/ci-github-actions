const atk = (createAtkName, damage, isCritical) => {
    return `${createAtkName} death ${isCritical ? damage * 2 : damage} damage!`
}

module.exports = atk;