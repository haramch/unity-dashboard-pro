import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
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
  Lightbulb
} from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Index = () => {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
            <p className="text-muted-foreground mt-2 max-w-2xl">
              This is the admin dashboard of the marketplace, allowing admin user(s) to monitor, manage, and control all key aspects of the platform.
            </p>
          </div>
        </div>

        {/* Info Banner */}
        <div className="bg-accent border border-accent-foreground/20 rounded-lg p-4 flex items-center space-x-3">
          <Lightbulb className="text-accent-foreground h-5 w-5" />
          <p className="text-sm text-accent-foreground">
            View key metrics like sales, orders, traffic sources, and customer activity at a glance. Use filters to track performance over time.
          </p>
        </div>

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
    </DashboardLayout>
  );
};

export default Index;
