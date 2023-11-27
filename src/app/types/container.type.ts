export type Item = {
    id: number,
    image: string,
    name: string
}

export type ContainerProps = {
    items: Item[],
    errorMsg: string
}