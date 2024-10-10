import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';

const Accordion = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b">
            <button
                className="flex justify-between items-center w-full py-4 text-left"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-xl font-semibold">{title}</span>
                {isOpen ? <ChevronUp /> : <ChevronDown />}
            </button>
            {isOpen && <div className="pb-4">{children}</div>}
        </div>
    );
};

export default Accordion;