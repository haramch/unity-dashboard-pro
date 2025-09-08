import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { DashboardHeader } from "@/components/DashboardHeader";
import { MetricCard } from "@/components/MetricCard";
import { StatisticsChart } from "@/components/StatisticsChart";
import { RecentOrders } from "@/components/RecentOrders";
import { TrafficChart } from "@/components/TrafficChart";
import { 
  ShoppingCart, 
  DollarSign, 
  Users, 
  Store,
  TrendingUp,
  Lightbulb,
  Calendar
} from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Index = () => {
  return (
    <DashboardLayout>
      <DashboardHeader
        title="Admin Dashboard"
        description="This is the admin dashboard of the marketplace, allowing admin user(s) to monitor, manage, and control all key aspects of the platform."
      >
        <div className="bg-accent border border-accent-foreground/20 rounded-lg p-4 flex items-center space-x-3 mx-6 mb-6">
          <Lightbulb className="text-accent-foreground h-5 w-5" />
          <p className="text-sm text-accent-foreground">
            View key metrics like sales, orders, traffic sources, and customer activity at a glance. Use filters to track performance over time.
          </p>
        </div>
      </DashboardHeader>
      
      <div className="p-6 space-y-6">

        {/* Statistics Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <StatisticsChart />
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Total Sales</h3>
              <Select defaultValue="30">
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="30">Past 30 Days</SelectItem>
                  <SelectItem value="90">Past 90 Days</SelectItem>
                  <SelectItem value="365">Past Year</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-3">
              <MetricCard
                title="Order Sales"
                value="€0.00"
                icon={ShoppingCart}
                color="metric-1"
              />
              <MetricCard
                title="Sales Earnings"
                value="€0.00"
                icon={DollarSign}
                color="metric-2"
              />
              <MetricCard
                title="New Users"
                value="0"
                icon={Users}
                color="metric-3"
              />
              <MetricCard
                title="New Shops"
                value="0"
                icon={Store}
                color="metric-4"
              />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <RecentOrders />
          <TrafficChart />
        </div>
      </div>
      
      {/* Book a Demo Button */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50">
        <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-8 text-sm font-medium tracking-wider transform -rotate-90 origin-center whitespace-nowrap transition-colors rounded-l-lg shadow-lg">
          <div className="flex items-center space-x-2">
            <Calendar className="h-4 w-4" />
            <span>BOOK A DEMO</span>
          </div>
        </button>
      </div>
    </DashboardLayout>
  );
};

export default Index;
