'use client';
import React, { useState } from 'react';

const FilterSidebar: React.FC = () => {
    const ToggleSwitch: React.FC = () => {
        const [isChecked, setIsChecked] = useState(false);
        const handleToggle = () => {
            setIsChecked(!isChecked);
        }
        return (
            <label htmlFor="toggle" className="relative inline-flex items-center cursor-pointer">
                <input
                    type="checkbox"
                    id="toggle"
                    className="sr-only peer"
                    checked={isChecked}
                    onChange={handleToggle}
                />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600" />
                <span id="toggleText" className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                    {isChecked ? 'On' : 'Off'}
                </span>
            </label>
        );
    };

    return (
        <div className="sticky top-40 w-64 bg-white p-4 shadow border-2 rounded-xl overflow-auto">
            <div className="space-y-6">
                <div>
                    <h3 className="text-lg font-semibold mb-2">참여 시간</h3>
                    <div className="space-y-1">
                        <label className="flex items-center">
                            <input type="checkbox" className="form-checkbox h-4 w-4 mr-2" />
                            풀타임
                        </label>
                        <label className="flex items-center">
                            <input type="checkbox" className="form-checkbox h-4 w-4 mr-2" />
                            주말
                        </label>
                        <label className="flex items-center">
                            <input type="checkbox" className="form-checkbox h-4 w-4 mr-2" />
                            평일
                        </label>
                        <label className="flex items-center">
                            <input type="checkbox" className="form-checkbox h-4 w-4 mr-2" />
                            평일(저녁)
                        </label>
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-2">교육 과정</h3>
                    <div className="space-y-1">
                        <label className="flex items-center">
                            <input type="checkbox" className="form-checkbox h-4 w-4 mr-2" />
                            Back-end
                        </label>
                        <label className="flex items-center">
                            <input type="checkbox" className="form-checkbox h-4 w-4 mr-2" />
                            Front-end
                        </label>
                        <label className="flex items-center">
                            <input type="checkbox" className="form-checkbox h-4 w-4 mr-2" />
                            AI Engineer
                        </label>
                        <label className="flex items-center">
                            <input type="checkbox" className="form-checkbox h-4 w-4 mr-2" />
                            UX/UI Design
                        </label>
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-2">임시</h3>
                    <ToggleSwitch />
                </div>
            </div>

            <div>
                <h3 className="text-lg font-semibold">지역</h3>
                <select className="form-select w-full p-2 border">
                    <option>경기</option>
                    <option>서울</option>
                    <option>그외</option>
                </select>
            </div>
        </div>
    );
};

export default FilterSidebar;