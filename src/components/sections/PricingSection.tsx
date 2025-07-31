"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card"
import { Button } from "../ui/Button"
import { Slider } from "../ui/Slider"
import { Badge } from "../ui/Badge"
import { Check, Users, Zap, Crown } from "lucide-react"

type PlanType = "starter" | "pro" | "enterprise"
type BillingType = "monthly" | "annual"

interface Plan {
  id: PlanType
  name: string
  icon: React.ReactNode
  pricePerUser: number
  features: string[]
  color: string
  popular?: boolean
}

const plans: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    icon: <Users className="w-5 h-5" />,
    pricePerUser: 10,
    features: ["Basic features", "Email support", "5GB storage", "Basic analytics"],
    color: "bg-blue-500",
  },
  {
    id: "pro",
    name: "Pro",
    icon: <Zap className="w-5 h-5" />,
    pricePerUser: 25,
    features: ["All Starter features", "Priority support", "50GB storage", "Advanced analytics", "API access"],
    color: "bg-purple-500",
    popular: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    icon: <Crown className="w-5 h-5" />,
    pricePerUser: 50,
    features: [
      "All Pro features",
      "24/7 phone support",
      "Unlimited storage",
      "Custom integrations",
      "Dedicated manager",
    ],
    color: "bg-orange-500",
  },
]

export default function PricingCalculator() {
  const [selectedPlan, setSelectedPlan] = useState<PlanType>("pro")
  const [userCount, setUserCount] = useState([10])
  const [billingType, setBillingType] = useState<BillingType>("monthly")

  const currentPlan = plans.find((plan) => plan.id === selectedPlan)!
  const monthlyPrice = currentPlan.pricePerUser * userCount[0]
  const annualPrice = monthlyPrice * 12 * 0.8 // 20% discount for annual
  const displayPrice = billingType === "monthly" ? monthlyPrice : annualPrice / 12
  const totalAnnualSavings = billingType === "annual" ? monthlyPrice * 12 * 0.2 : 0

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Pricing Calculator</h1>
        <p className="text-muted-foreground text-lg">Choose your plan and see pricing based on your team size</p>
      </div>

      {/* Billing Toggle */}
      <div className="flex justify-center">
        <div className="flex items-center space-x-4 bg-muted p-1 rounded-lg">
          <Button
            variant={billingType === "monthly" ? "default" : "ghost"}
            size="sm"
            onClick={() => setBillingType("monthly")}
            className="relative"
          >
            Monthly
          </Button>
          <Button
            variant={billingType === "annual" ? "default" : "ghost"}
            size="sm"
            onClick={() => setBillingType("annual")}
            className="relative"
          >
            Annual
            <Badge variant="secondary" className="ml-2 text-xs">
              Save 20%
            </Badge>
          </Button>
        </div>
      </div>

      {/* Plan Selection */}
      <div className="grid md:grid-cols-3 gap-4">
        {plans.map((plan) => (
          <Card
            key={plan.id}
            className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
              selectedPlan === plan.id ? "ring-2 ring-primary shadow-lg scale-105" : "hover:scale-102"
            } ${plan.popular ? "relative" : ""}`}
            onClick={() => setSelectedPlan(plan.id)}
          >
            {plan.popular && (
              <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-primary">Most Popular</Badge>
            )}
            <CardHeader className="text-center pb-4">
              <div
                className={`w-12 h-12 ${plan.color} rounded-lg flex items-center justify-center text-white mx-auto mb-2`}
              >
                {plan.icon}
              </div>
              <CardTitle className="text-xl">{plan.name}</CardTitle>
              <div className="text-2xl font-bold">
                ${plan.pricePerUser}
                <span className="text-sm font-normal text-muted-foreground">/user/month</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm">
                    <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* User Count Slider */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Number of Users</span>
            <Badge variant="outline" className="text-lg px-3 py-1">
              {userCount[0]} {userCount[0] === 1 ? "user" : "users"}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Slider value={userCount} onValueChange={setUserCount} max={100} min={1} step={1} className="w-full" />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>1 user</span>
            <span>100 users</span>
          </div>
        </CardContent>
      </Card>

      {/* Pricing Summary */}
      <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Pricing Summary</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold">
              ${displayPrice.toFixed(0)}
              <span className="text-lg font-normal text-muted-foreground">/month</span>
            </div>
            <p className="text-muted-foreground">
              {currentPlan.name} plan for {userCount[0]} {userCount[0] === 1 ? "user" : "users"}
            </p>
          </div>

          {billingType === "annual" && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
              <p className="text-green-800 font-medium">
                💰 You save ${totalAnnualSavings.toFixed(0)} per year with annual billing!
              </p>
            </div>
          )}

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="space-y-1">
              <p className="text-muted-foreground">Monthly total:</p>
              <p className="font-semibold">${displayPrice.toFixed(0)}</p>
            </div>
            <div className="space-y-1">
              <p className="text-muted-foreground">Annual total:</p>
              <p className="font-semibold">
                ${billingType === "annual" ? annualPrice.toFixed(0) : (monthlyPrice * 12).toFixed(0)}
              </p>
            </div>
          </div>

          <Button className="w-full" size="lg">
            Get Started with {currentPlan.name}
          </Button>

          <p className="text-center text-xs text-muted-foreground">
            No setup fees • Cancel anytime • 14-day free trial
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
