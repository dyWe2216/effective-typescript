interface ComponentProps {
    onSelectItem: (id: number) => void;
}
function renderSelector(props: ComponentProps) { /* ... */ }

let selectedId: number = 0;
function handleSelectItem(item: any) {
    selectedId = item.id;
}

renderSelector({onSelectItem: handleSelectItem});