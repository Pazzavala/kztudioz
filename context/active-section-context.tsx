'use client';

// LOOK Further

// React hooks we need
import React, {
    useState,
    createContext,
    useContext,
    SetStateAction,
} from 'react';

// Our Custome Types we have
import type { SectionName } from '@/lib/types';

type ActiveSectionContextProviderProp = { children: React.ReactNode };

type ActiveSectionContextType = {
    activeSection: SectionName;
    setActiveSection: React.Dispatch<SetStateAction<SectionName>>;
    timeOfLastClick: number;
    setTimeOfLastClick: React.Dispatch<SetStateAction<number>>;
};

export const ActiveSectionContext =
    createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({
    children,
}: ActiveSectionContextProviderProp) {
    const [activeSection, setActiveSection] = useState<SectionName>('Home');
    const [timeOfLastClick, setTimeOfLastClick] = useState(0);

    return (
        <ActiveSectionContext.Provider
            value={{
                activeSection,
                setActiveSection,
                timeOfLastClick,
                setTimeOfLastClick,
            }}
        >
            {children}
        </ActiveSectionContext.Provider>
    );
}

export function useActiveSectionContext() {
    const context = useContext(ActiveSectionContext);

    if (context === null) {
        throw new Error(
            'useActiveSectionContext must be within a ActiveSectionContextProvider'
        );
    }

    return context;
}
