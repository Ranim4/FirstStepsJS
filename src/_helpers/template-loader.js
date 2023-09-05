export class TemplateLoader{
    #templateId = ''
    constructor(templateId) {
        this.#templateId = templateId
    }

    loadTemplate(){
        const template = document.getElementById(this.#templateId)

        if(template === null){
            throw new Error(`Template with ${this.#templateId} name does not exist`)
        }
        const nodes = template.content.cloneNode(true)
        return nodes
    }
}