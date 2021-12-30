const atk = (createAtkName, damage, isCritical) => `${createAtkName} death ${isCritical ? damage * 2 : damage} damage!`;

module.exports = atk;
