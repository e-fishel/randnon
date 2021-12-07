module.exports = (color) => {
	switch (color) {
		case "epic":
			return 0xccff66;
		break;
		case "epicDec":
			return "ccff66";
		break;
		case "pineapple":
			let pinneappleColors = [
				0xe86a3c,
				0xe96e39,
				0xea7237,
				0xeb7735,
				0xec7b33,
				0xed7f31,
				0xee842f,
				0xef882d,
				0xf08c2a,
				0xf19128,
				0xf29526,
				0xf39924,
				0xf39e22,
				0xf4a220,
				0xf5a71e,
				0xf6ab1b,
				0xf7af19,
				0xf8b417,
				0xf9b815,
				0xe4bb17,
				0x8ec920,
				0x78cd23,
				0x63d025,
				0x5ecc23,
				0x58c721,
				0x53c31f,
				0x4dbe1d,
				0x48ba1b,
				0x43b619,
				0x3db117,
				0x38ad15,
				0x31a813,
				0x2ba311,
				0x249e0f,
				0x1e9a0d,
				0x17950b,
				0x119009,
				0x0b8c07
			]
			return pinneappleColors[Math.floor(Math.random() * pinneappleColors.length)];
		break;
		default:
			return 0xccff66;
	}
}
