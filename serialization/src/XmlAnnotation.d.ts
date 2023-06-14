
export declare function xmlAttribute(attributeName?: string, namespace?: string): (target: any, key: any) => void

export declare function xmlElement(elementName?: string, namespace?: string): (target: any, key: any) => void

export declare function xmlIgnore(): (target: any, key: any) => void