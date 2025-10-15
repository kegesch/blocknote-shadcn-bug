import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteSchema } from "@blocknote/core";
// Or, you can use ariakit, shadcn, etc.
import { BlockNoteView } from "@blocknote/shadcn";
// Default styles for the mantine editor
import "@blocknote/shadcn/style.css";
// Include the included Inter font
import "@blocknote/core/fonts/inter.css";
import { createAlert } from "./Alert";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./components/ui/dropdown-menu";

export default function App() {
    // Create a new editor instance
    const schema = BlockNoteSchema.create().extend({
        blockSpecs: {
            // Creates an instance of the Alert block and adds it to the schema.
            alert: createAlert(),
        },
    });

    const editor = useCreateBlockNote({
        schema,
        initialContent: [
            {
                type: "paragraph",
                content: "Welcome to this demo!",
            },
            {
                type: "alert",
                content: "This is an example alert",
            },
            {
                type: "paragraph",
                content: "Click the '!' icon to change the alert type",
            },
            {
                type: "paragraph",
            },
        ],
    });

    // Render the editor
    return <div>
        <DropdownMenu>
            <DropdownMenuTrigger>
                Trigger
            </DropdownMenuTrigger>
            <DropdownMenuContent
                align="start"
            >
                <DropdownMenuItem>

                    Create new space
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
        <BlockNoteView editor={editor} /></div>;
}