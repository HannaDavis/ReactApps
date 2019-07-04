import App from 'next/app';
import { AppProvider } from '@shopify/polaris';
import {Provider, ResourcePicker} from '@shopify/app-bridge-react';
import { EmptyState, Layout, Page,TextStyle } from '@shopify/polaris';
import {
  Avatar,
  Button,
  Card,
  Form,
  FormLayout,
  ResourceList,
  Stack,
  TextField,
} from '@shopify/polaris';
const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

class Index extends React.Component{
  state = { open: false };
  render() {
    return (
    <AppProvider>
    <Page
        primaryAction={{
          content: 'Select products',
        }}
      >
      <ResourcePicker
        resourceType="Product"
        showVariants={false}
        open={this.state.open}
        onSelection={(resources) => this.handleSeletion(resources)}
        onCancel={() => this.setState({ open:false })}
        />
       <Layout>
        <EmptyState
          heading="Discount your products temporarily"
          action={{
            content: 'Select products',
            onAction: () => this.setState({ open: true }),
          }}
          image={img}
          >
          <p>Select products to change their price temporarily</p>
          </EmptyState>
       </Layout>
      </Page>
      </AppProvider>
    );
  }
  handleSeletion = (resources) => {
    this.setState({ open:false })
    console.log(resources)
  };
}

export default Index;
