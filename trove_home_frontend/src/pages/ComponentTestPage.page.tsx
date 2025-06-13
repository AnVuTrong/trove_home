import React, { useState } from 'react';
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
import { useAppTranslation } from '../i18n/TranslationUtils.utils';

interface TableDataItem {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
}

const ComponentTestPage: React.FC = () => {
  const { t } = useAppTranslation();
  
  const [inputValue, setInputValue] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedListItem, setSelectedListItem] = useState<string | null>(null);
  const [tableData] = useState<TableDataItem[]>([
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'active' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Moderator', status: 'inactive' }
  ]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log('Form submitted with:', inputValue);
  };

  const handleModalOpen = (): void => {
    setIsModalOpen(true);
  };

  const handleModalClose = (): void => {
    setIsModalOpen(false);
  };

  const handleListItemClick = (item: string): void => {
    setSelectedListItem(item);
  };

  const renderButtonsSection = (): React.ReactNode => {
    return (
      <Card className="mb-8">
        <Text as="h2" size="2xl" weight="bold" className="mb-4">
          {t('componentTest.buttons.title')}
        </Text>
        <Stack direction="horizontal" spacing="md" wrap>
          <Button variant="primary">{t('componentTest.buttons.primary')}</Button>
          <Button variant="secondary">{t('componentTest.buttons.secondary')}</Button>
          <Button variant="danger">{t('componentTest.buttons.danger')}</Button>
          <Button variant="success">{t('componentTest.buttons.success')}</Button>
          <Button variant="outline">{t('componentTest.buttons.outline')}</Button>
          <Button size="sm">{t('componentTest.buttons.small')}</Button>
          <Button size="lg">{t('componentTest.buttons.large')}</Button>
          <Button loading>{t('componentTest.buttons.loading')}</Button>
          <Button disabled>{t('componentTest.buttons.disabled')}</Button>
        </Stack>
      </Card>
    );
  };

  const renderInputsSection = (): React.ReactNode => {
    return (
      <Card className="mb-8">
        <Text as="h2" size="2xl" weight="bold" className="mb-4">
          {t('componentTest.inputs.title')}
        </Text>
        <Stack spacing="md">
          <Input
            label={t('componentTest.inputs.basicLabel') as string}
            placeholder={t('componentTest.inputs.basicPlaceholder') as string}
            value={inputValue}
            onChange={handleInputChange}
          />
          <Input
            label={t('componentTest.inputs.emailLabel') as string}
            type="email"
            placeholder={t('componentTest.inputs.emailPlaceholder') as string}
            helperText={t('componentTest.inputs.emailHelper') as string}
          />
          <Input
            label={t('componentTest.inputs.passwordLabel') as string}
            type="password"
            placeholder={t('componentTest.inputs.passwordPlaceholder') as string}
            required
          />
          <Input
            label={t('componentTest.inputs.errorLabel') as string}
            placeholder={t('componentTest.inputs.errorPlaceholder') as string}
            errorMessage={t('componentTest.inputs.errorMessage') as string}
          />
          <Input
            label={t('componentTest.inputs.successLabel') as string}
            placeholder={t('componentTest.inputs.successPlaceholder') as string}
            variant="filled"
            helperText={t('componentTest.inputs.successHelper') as string}
          />
        </Stack>
      </Card>
    );
  };

  const renderTextSection = (): React.ReactNode => {
    return (
      <Card className="mb-8">
        <Text as="h2" size="2xl" weight="bold" className="mb-4">
          {t('componentTest.text.title')}
        </Text>
        <Stack spacing="sm">
          <Text as="h1" size="4xl" weight="bold">{t('componentTest.text.heading1')}</Text>
          <Text as="h2" size="3xl" weight="bold">{t('componentTest.text.heading2')}</Text>
          <Text as="h3" size="2xl" weight="semibold">{t('componentTest.text.heading3')}</Text>
          <Text as="p" size="lg">{t('componentTest.text.largeParagraph')}</Text>
          <Text as="p">{t('componentTest.text.regularParagraph')}</Text>
          <Text as="p" size="sm" color="muted">{t('componentTest.text.smallMuted')}</Text>
          <Text as="p" color="primary">{t('componentTest.text.primaryColor')}</Text>
          <Text as="p" color="danger" weight="bold">{t('componentTest.text.boldDanger')}</Text>
          <Text as="p" italic underline>{t('componentTest.text.italicUnderlined')}</Text>
        </Stack>
      </Card>
    );
  };

  const renderImageSection = (): React.ReactNode => {
    return (
      <Card className="mb-8">
        <Text as="h2" size="2xl" weight="bold" className="mb-4">
          {t('componentTest.images.title')}
        </Text>
        <Grid cols={3} gap="md">
          <Image
            src="https://via.placeholder.com/200x150"
            alt={t('componentTest.images.placeholder')}
            width={200}
            height={150}
            rounded="md"
          />
          <Image
            src="https://via.placeholder.com/200x150/ff0000"
            alt={t('componentTest.images.redPlaceholder')}
            width={200}
            height={150}
            rounded="lg"
            objectFit="cover"
          />
          <Image
            src="https://via.placeholder.com/200x150/00ff00"
            alt={t('componentTest.images.greenPlaceholder')}
            width={200}
            height={150}
            rounded="full"
          />
        </Grid>
      </Card>
    );
  };

  const renderLayoutSection = (): React.ReactNode => {
    return (
      <Card className="mb-8">
        <Text as="h2" size="2xl" weight="bold" className="mb-4">
          {t('componentTest.layout.title')}
        </Text>
        
        <Text as="h3" size="lg" weight="semibold" className="mb-2">
          {t('componentTest.layout.flexTitle')}
        </Text>
        <Flex justify="between" align="center" className="bg-gray-100 p-4 rounded mb-4">
          <Box className="bg-blue-200 p-2 rounded">{t('componentTest.layout.box1')}</Box>
          <Box className="bg-green-200 p-2 rounded">{t('componentTest.layout.box2')}</Box>
          <Box className="bg-red-200 p-2 rounded">{t('componentTest.layout.box3')}</Box>
        </Flex>

        <Text as="h3" size="lg" weight="semibold" className="mb-2">
          {t('componentTest.layout.gridTitle')}
        </Text>
        <Grid cols={4} gap="md" className="mb-4">
          <Box className="bg-purple-200 p-4 rounded text-center">1</Box>
          <Box className="bg-yellow-200 p-4 rounded text-center">2</Box>
          <Box className="bg-pink-200 p-4 rounded text-center">3</Box>
          <Box className="bg-indigo-200 p-4 rounded text-center">4</Box>
        </Grid>

        <Text as="h3" size="lg" weight="semibold" className="mb-2">
          {t('componentTest.layout.stackTitle')}
        </Text>
        <Stack spacing="sm" className="bg-gray-100 p-4 rounded">
          <Box className="bg-orange-200 p-2 rounded">{t('componentTest.layout.stackItem1')}</Box>
          <Box className="bg-teal-200 p-2 rounded">{t('componentTest.layout.stackItem2')}</Box>
          <Box className="bg-cyan-200 p-2 rounded">{t('componentTest.layout.stackItem3')}</Box>
        </Stack>
      </Card>
    );
  };

  const renderListSection = (): React.ReactNode => {
    return (
      <Card className="mb-8">
        <Text as="h2" size="2xl" weight="bold" className="mb-4">
          {t('componentTest.lists.title')}
        </Text>
        <Grid cols={2} gap="lg">
          <div>
            <Text as="h3" size="lg" weight="semibold" className="mb-2">
              {t('componentTest.lists.unorderedTitle')}
            </Text>
            <List variant="disc" spacing="sm">
              <ListItem>{t('componentTest.lists.firstItem')}</ListItem>
              <ListItem>{t('componentTest.lists.secondItem')}</ListItem>
              <ListItem>{t('componentTest.lists.thirdItem')}</ListItem>
            </List>
          </div>
          <div>
            <Text as="h3" size="lg" weight="semibold" className="mb-2">
              {t('componentTest.lists.interactiveTitle')}
            </Text>
            <List variant="none" spacing="none">
              <ListItem
                variant="interactive"
                clickable
                selected={selectedListItem === 'item1'}
                onClick={() => handleListItemClick('item1')}
              >
                {t('componentTest.lists.clickableItem1')}
              </ListItem>
              <ListItem
                variant="interactive"
                clickable
                selected={selectedListItem === 'item2'}
                onClick={() => handleListItemClick('item2')}
              >
                {t('componentTest.lists.clickableItem2')}
              </ListItem>
              <ListItem
                variant="interactive"
                clickable
                selected={selectedListItem === 'item3'}
                onClick={() => handleListItemClick('item3')}
              >
                {t('componentTest.lists.clickableItem3')}
              </ListItem>
            </List>
          </div>
        </Grid>
      </Card>
    );
  };

  const renderTableSection = (): React.ReactNode => {
    return (
      <Card className="mb-8">
        <Text as="h2" size="2xl" weight="bold" className="mb-4">
          {t('componentTest.table.title')}
        </Text>
        <Table variant="bordered" responsive>
          <TableHeader>
            <TableRow>
              <TableCell as="th" scope="col">{t('componentTest.table.id')}</TableCell>
              <TableCell as="th" scope="col">{t('componentTest.table.name')}</TableCell>
              <TableCell as="th" scope="col">{t('componentTest.table.email')}</TableCell>
              <TableCell as="th" scope="col">{t('componentTest.table.role')}</TableCell>
              <TableCell as="th" scope="col">{t('componentTest.table.status')}</TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tableData.map((row) => (
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
                    {t(`componentTest.table.${row.status}`)}
                  </Text>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    );
  };

  const renderFormSection = (): React.ReactNode => {
    return (
      <Card className="mb-8">
        <Text as="h2" size="2xl" weight="bold" className="mb-4">
          {t('componentTest.form.title')}
        </Text>
        <Form onSubmit={handleFormSubmit} spacing="md">
          <Input
            label={t('componentTest.form.fullNameLabel') as string}
            placeholder={t('componentTest.form.fullNamePlaceholder') as string}
            required
            name="fullName"
          />
          <Input
            label={t('componentTest.form.emailLabel') as string}
            type="email"
            placeholder={t('componentTest.form.emailPlaceholder') as string}
            required
            name="email"
          />
          <Input
            label={t('componentTest.form.messageLabel') as string}
            placeholder={t('componentTest.form.messagePlaceholder') as string}
            name="message"
          />
          <Flex justify="end" gap="md">
            <Button variant="outline" type="reset">
              {t('componentTest.form.reset')}
            </Button>
            <Button variant="primary" type="submit">
              {t('componentTest.form.submitForm')}
            </Button>
          </Flex>
        </Form>
      </Card>
    );
  };

  const renderModalSection = (): React.ReactNode => {
    return (
      <Card className="mb-8">
        <Text as="h2" size="2xl" weight="bold" className="mb-4">
          {t('componentTest.modal.title')}
        </Text>
        <Button onClick={handleModalOpen}>
          {t('componentTest.modal.openModal')}
        </Button>
        
        <Modal
          isOpen={isModalOpen}
          onClose={handleModalClose}
          title={t('componentTest.modal.testModal') as string}
          size="md"
        >
          <Stack spacing="md">
            <Text as="p">
              {t('componentTest.modal.modalDescription')}
            </Text>
            <Input
              label={t('componentTest.modal.sampleInput') as string}
              placeholder={t('componentTest.modal.samplePlaceholder') as string}
            />
            <Flex justify="end" gap="md">
              <Button variant="outline" onClick={handleModalClose}>
                {t('common.cancel')}
              </Button>
              <Button variant="primary" onClick={handleModalClose}>
                {t('componentTest.modal.save')}
              </Button>
            </Flex>
          </Stack>
        </Modal>
      </Card>
    );
  };

  return (
    <Container size="6xl" centerContent padding="lg">
      <Text as="h1" size="4xl" weight="bold" align="center" className="mb-8">
        {t('componentTest.title')}
      </Text>
      
      <Text as="p" size="lg" color="muted" align="center" className="mb-12">
        {t('componentTest.description')}
      </Text>

      {renderButtonsSection()}
      {renderInputsSection()}
      {renderTextSection()}
      {renderImageSection()}
      {renderLayoutSection()}
      {renderListSection()}
      {renderTableSection()}
      {renderFormSection()}
      {renderModalSection()}

      <Card>
        <Text as="h2" size="2xl" weight="bold" className="mb-4">
          {t('componentTest.links.title')}
        </Text>
        <Stack spacing="md">
          <Link href="#" variant="primary">{t('componentTest.links.primaryLink')}</Link>
          <Link href="#" variant="secondary">{t('componentTest.links.secondaryLink')}</Link>
          <Link href="#" variant="danger">{t('componentTest.links.dangerLink')}</Link>
          <Link href="https://example.com" external>
            {t('componentTest.links.externalLink')}
          </Link>
          <Link href="#" disabled>{t('componentTest.links.disabledLink')}</Link>
        </Stack>
      </Card>
    </Container>
  );
};

export default ComponentTestPage; 