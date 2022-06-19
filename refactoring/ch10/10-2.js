function disabilityAmount(employee) {
	if (isNotEligibleForDisability()) {
		return 0;
	}
	return 1;

	function isNotEligibleForDisability() {
		return (
			employee.seniority < 2 ||
			employee.monthsDisabled > 12 ||
			employee.isPartTime
		);
	}
}
