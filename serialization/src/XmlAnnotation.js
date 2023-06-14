

function initMetadata(anyConstructor) {
    const metadataProperty = Symbol.for('xml:metadata');
    if (Object.prototype.hasOwnProperty.call(anyConstructor, metadataProperty) === false) {
        anyConstructor[metadataProperty] = {
            root: {
                name: anyConstructor.name,
                namespace: null,
                type: 1 // Node.ELEMENT_NODE
            },
            properties: {},
            exclude: []
        }
    }
    return anyConstructor[metadataProperty];
}

/**
 * 
 * @param {string=} attributeName
 * @param {string=} namespace 
 */
function xmlAttribute(attributeName, namespace) {
    return (target, key) => {
        const metadata = initMetadata(target.constructor);
        const type = 2; // Node.ATTRIBUTE_NODE
        const name = attributeName || key;
        metadata.properties[key] = {
            name,
            namespace,
            type
        };
    }
}

/**
 * 
 * @param {string=} elementName
 * @param {string=} namespace 
 */
function xmlElement(elementName, namespace) {
    return (target, key) => {
        const metadata = initMetadata(target.constructor);
        const type = 1; // Node.ELEMENT_NODE
        const name = elementName || key;
        metadata.properties[key] = {
            name,
            namespace,
            type
        };
    }
}

/**
 * 
 * @param {string=} elementName
 * @param {string=} namespace 
 */
function xmlArray(elementName, namespace) {
    return (target, key) => {
        const metadata = initMetadata(target.constructor);
        const type = 1 // Node.ELEMENT_NODE 
        const name = elementName || key;
        metadata.properties[key] = {
            name: elementName || key,
            namespace,
            enumerable: true,
            type
        };
    }
}

/**
 * 
 */
function xmlIgnore() {
    return (target, key) => {
        const metadata = initMetadata(target.constructor);
        metadata.exclude.push(key);
    }
}

export {
    xmlAttribute,
    xmlElement,
    xmlIgnore
}