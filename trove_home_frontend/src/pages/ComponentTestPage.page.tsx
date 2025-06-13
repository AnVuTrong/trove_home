import React from 'react';
import {
  Button,
  Input,
  Text,
  Image,
  Card,
  Link,
  Box,
  Flex,
  Grid,
  Stack,
  Container,
  List,
  ListItem,
  Table,
  TableRow,
  TableCell,
  TableHeader,
  TableBody,
  // TableFooter, // Not used in test page
  Form,
  Modal
} from '../components/ui.components';

interface ComponentTestPageState {
  inputValue: string;
  isModalOpen: boolean;
  selectedListItem: string | null;
  tableData: Array<{
    id: number;
    name: string;
    email: string;
    role: string;
    status: 'active' | 'inactive';
  }>;
}

class ComponentTestPage extends React.Component<{}, ComponentTestPageState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      inputValue: '',
      isModalOpen: false,
      selectedListItem: null,
      tableData: [
        { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'active' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'active' },
        { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Moderator', status: 'inactive' }
      ]
    };
  }

  private handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ inputValue: event.target.value });
  };

  private handleFormSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log('Form submitted with:', this.state.inputValue);
  };

  private handleModalOpen = (): void => {
    this.setState({ isModalOpen: true });
  };

  private handleModalClose = (): void => {
    this.setState({ isModalOpen: false });
  };

  private handleListItemClick = (item: string): void => {
    this.setState({ selectedListItem: item });
  };

  private renderButtonsSection(): React.ReactNode {
    return (
      <Card className="mb-8">
        <Text as="h2" size="2xl" weight="bold" className="mb-4">
          Button Components
        </Text>
        <Stack direction="horizontal" spacing="md" wrap>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="success">Success</Button>
          <Button variant="outline">Outline</Button>
          <Button size="sm">Small</Button>
          <Button size="lg">Large</Button>
          <Button loading>Loading</Button>
          <Button disabled>Disabled</Button>
        </Stack>
      </Card>
    );
  }

  private renderInputsSection(): React.ReactNode {
    return (
      <Card className="mb-8">
        <Text as="h2" size="2xl" weight="bold" className="mb-4">
          Input Components
        </Text>
        <Stack spacing="md">
          <Input
            label="Basic Input"
            placeholder="Enter text here"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <Input
            label="Email Input"
            type="email"
            placeholder="your@email.com"
            helperText="We'll never share your email"
          />
          <Input
            label="Password Input"
            type="password"
            placeholder="••••••••"
            required
          />
          <Input
            label="Error State"
            placeholder="Invalid input"
            errorMessage="This field is required"
            variant="error"
          />
          <Input
            label="Success State"
            placeholder="Valid input"
            variant="success"
            helperText="Looks good!"
          />
        </Stack>
      </Card>
    );
  }

  private renderTextSection(): React.ReactNode {
    return (
      <Card className="mb-8">
        <Text as="h2" size="2xl" weight="bold" className="mb-4">
          Text Components
        </Text>
        <Stack spacing="sm">
          <Text as="h1" size="4xl" weight="bold">Heading 1</Text>
          <Text as="h2" size="3xl" weight="bold">Heading 2</Text>
          <Text as="h3" size="2xl" weight="semibold">Heading 3</Text>
          <Text as="p" size="lg">Large paragraph text</Text>
          <Text as="p">Regular paragraph text</Text>
          <Text as="p" size="sm" color="muted">Small muted text</Text>
          <Text as="p" color="primary">Primary colored text</Text>
          <Text as="p" color="danger" weight="bold">Bold danger text</Text>
          <Text as="p" italic underline>Italic underlined text</Text>
        </Stack>
      </Card>
    );
  }

  private renderImageSection(): React.ReactNode {
    return (
      <Card className="mb-8">
        <Text as="h2" size="2xl" weight="bold" className="mb-4">
          Image Components
        </Text>
        <Grid cols={3} gap="md">
          <Image
            src="https://via.placeholder.com/200x150"
            alt="Placeholder image"
            width={200}
            height={150}
            rounded="md"
          />
          <Image
            src="https://via.placeholder.com/200x150/ff0000"
            alt="Red placeholder"
            width={200}
            height={150}
            rounded="lg"
            objectFit="cover"
          />
          <Image
            src="https://via.placeholder.com/200x150/00ff00"
            alt="Green placeholder"
            width={200}
            height={150}
            rounded="full"
          />
        </Grid>
      </Card>
    );
  }

  private renderLayoutSection(): React.ReactNode {
    return (
      <Card className="mb-8">
        <Text as="h2" size="2xl" weight="bold" className="mb-4">
          Layout Components
        </Text>
        
        <Text as="h3" size="lg" weight="semibold" className="mb-2">
          Flex Layout
        </Text>
        <Flex justify="between" align="center" className="bg-gray-100 p-4 rounded mb-4">
          <Box className="bg-blue-200 p-2 rounded">Box 1</Box>
          <Box className="bg-green-200 p-2 rounded">Box 2</Box>
          <Box className="bg-red-200 p-2 rounded">Box 3</Box>
        </Flex>

        <Text as="h3" size="lg" weight="semibold" className="mb-2">
          Grid Layout
        </Text>
        <Grid cols={4} gap="md" className="mb-4">
          <Box className="bg-purple-200 p-4 rounded text-center">1</Box>
          <Box className="bg-yellow-200 p-4 rounded text-center">2</Box>
          <Box className="bg-pink-200 p-4 rounded text-center">3</Box>
          <Box className="bg-indigo-200 p-4 rounded text-center">4</Box>
        </Grid>

        <Text as="h3" size="lg" weight="semibold" className="mb-2">
          Stack Layout
        </Text>
        <Stack spacing="sm" className="bg-gray-100 p-4 rounded">
          <Box className="bg-orange-200 p-2 rounded">Stack Item 1</Box>
          <Box className="bg-teal-200 p-2 rounded">Stack Item 2</Box>
          <Box className="bg-cyan-200 p-2 rounded">Stack Item 3</Box>
        </Stack>
      </Card>
    );
  }

  private renderListSection(): React.ReactNode {
    return (
      <Card className="mb-8">
        <Text as="h2" size="2xl" weight="bold" className="mb-4">
          List Components
        </Text>
        <Grid cols={2} gap="lg">
          <div>
            <Text as="h3" size="lg" weight="semibold" className="mb-2">
              Unordered List
            </Text>
            <List variant="disc" spacing="sm">
              <ListItem>First item</ListItem>
              <ListItem>Second item</ListItem>
              <ListItem>Third item</ListItem>
            </List>
          </div>
          <div>
            <Text as="h3" size="lg" weight="semibold" className="mb-2">
              Interactive List
            </Text>
            <List variant="none" spacing="none">
              <ListItem
                variant="interactive"
                clickable
                selected={this.state.selectedListItem === 'item1'}
                onClick={() => this.handleListItemClick('item1')}
              >
                Clickable Item 1
              </ListItem>
              <ListItem
                variant="interactive"
                clickable
                selected={this.state.selectedListItem === 'item2'}
                onClick={() => this.handleListItemClick('item2')}
              >
                Clickable Item 2
              </ListItem>
              <ListItem
                variant="interactive"
                clickable
                selected={this.state.selectedListItem === 'item3'}
                onClick={() => this.handleListItemClick('item3')}
              >
                Clickable Item 3
              </ListItem>
            </List>
          </div>
        </Grid>
      </Card>
    );
  }

  private renderTableSection(): React.ReactNode {
    return (
      <Card className="mb-8">
        <Text as="h2" size="2xl" weight="bold" className="mb-4">
          Table Components
        </Text>
        <Table variant="bordered" responsive>
          <TableHeader>
            <TableRow>
              <TableCell as="th" scope="col">ID</TableCell>
              <TableCell as="th" scope="col">Name</TableCell>
              <TableCell as="th" scope="col">Email</TableCell>
              <TableCell as="th" scope="col">Role</TableCell>
              <TableCell as="th" scope="col">Status</TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {this.state.tableData.map((row) => (
              <TableRow key={row.id} hover>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.role}</TableCell>
                <TableCell>
                  <Text
                    as="span"
                    size="sm"
                    color={row.status === 'active' ? 'success' : 'warning'}
                    weight="medium"
                  >
                    {row.status}
                  </Text>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    );
  }

  private renderFormSection(): React.ReactNode {
    return (
      <Card className="mb-8">
        <Text as="h2" size="2xl" weight="bold" className="mb-4">
          Form Components
        </Text>
        <Form onSubmit={this.handleFormSubmit} spacing="md">
          <Input
            label="Full Name"
            placeholder="Enter your full name"
            required
            name="fullName"
          />
          <Input
            label="Email Address"
            type="email"
            placeholder="your@email.com"
            required
            name="email"
          />
          <Input
            label="Message"
            placeholder="Enter your message"
            name="message"
          />
          <Flex justify="end" gap="md">
            <Button variant="outline" type="reset">
              Reset
            </Button>
            <Button variant="primary" type="submit">
              Submit Form
            </Button>
          </Flex>
        </Form>
      </Card>
    );
  }

  private renderModalSection(): React.ReactNode {
    return (
      <Card className="mb-8">
        <Text as="h2" size="2xl" weight="bold" className="mb-4">
          Modal Components
        </Text>
        <Button onClick={this.handleModalOpen}>
          Open Modal
        </Button>
        
        <Modal
          isOpen={this.state.isModalOpen}
          onClose={this.handleModalClose}
          title="Test Modal"
          size="md"
        >
          <Stack spacing="md">
            <Text as="p">
              This is a test modal to demonstrate the Modal component functionality.
            </Text>
            <Input
              label="Sample Input"
              placeholder="Try typing here"
            />
            <Flex justify="end" gap="md">
              <Button variant="outline" onClick={this.handleModalClose}>
                Cancel
              </Button>
              <Button variant="primary" onClick={this.handleModalClose}>
                Save
              </Button>
            </Flex>
          </Stack>
        </Modal>
      </Card>
    );
  }

  render(): React.ReactNode {
    return (
      <Container size="6xl" centerContent padding="lg">
        <Text as="h1" size="4xl" weight="bold" align="center" className="mb-8">
          UI Components Test Page
        </Text>
        
        <Text as="p" size="lg" color="muted" align="center" className="mb-12">
          This page showcases all the available UI components in the design system.
        </Text>

        {this.renderButtonsSection()}
        {this.renderInputsSection()}
        {this.renderTextSection()}
        {this.renderImageSection()}
        {this.renderLayoutSection()}
        {this.renderListSection()}
        {this.renderTableSection()}
        {this.renderFormSection()}
        {this.renderModalSection()}

        <Card>
          <Text as="h2" size="2xl" weight="bold" className="mb-4">
            Links & Navigation
          </Text>
          <Stack spacing="md">
            <Link href="#" variant="primary">Primary Link</Link>
            <Link href="#" variant="secondary">Secondary Link</Link>
            <Link href="#" variant="danger">Danger Link</Link>
            <Link href="https://example.com" external>
              External Link
            </Link>
            <Link href="#" disabled>Disabled Link</Link>
          </Stack>
        </Card>
      </Container>
    );
  }
}

export default ComponentTestPage; 