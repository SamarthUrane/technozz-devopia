"use client";

import "chart.js/auto";
import { BarChartBig } from "lucide-react";
import {Bar} from 'react-chartjs-2';

const investmentNames = ["Stock", "Land", "Gold", "Other"];

type Props = {
    investmentAmount: number[]
}

export const BarChart = ({
    investmentAmount
}: Props) => {
    const backgroundColors = "rgba(79, 229, 74, 0.8)";
    return(
        <div>
            <div className="flex items-center font-semibold text-lg text-neutral-700">
                <BarChartBig className="h-6 w-6 mr-2" />
                Investment Chart
            </div>
            <Bar
                data={{
                    labels: investmentNames.map((bal) => bal),
                    datasets: [
                        {
                            label: "Balances",
                            data: investmentAmount.map((bal) => bal),
                            backgroundColor: backgroundColors,
                            borderRadius: 5
                        }
                    ]
                }}
            />
        </div>
    )
}