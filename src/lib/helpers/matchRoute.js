const routeParam = /\[(\w+)\]/;

export function matchRoute(
        /** @type string|null */
        pattern = '',
        /** @type string|null */
        route = ''
    ) {
    if (pattern === null || route === null) {
        return false;
    }

    const patternSegments = pattern.split('/');
    const routeSegments   = route.split('/');

    if (patternSegments.length !== routeSegments.length) {
        return false;
    }

    for (let i = 0; i < patternSegments.length; i++) {
        const patternSegment = patternSegments[i];
        const routeSegment   = routeSegments[i];

        if (!(routeParam.test(patternSegment) || patternSegment === routeSegment)) {
            return false;
        }
    }

    return true;
}
